import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Read the file from the request
    const query = req.nextUrl.searchParams.get("query")
    const formData = await req.formData();
    const file = formData.get('file');
    const mode = formData.get('mode');
    const api_key = formData.get('api_key');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    try {
      // Send the file to FastAPI

      if(query == "analyze"){
        try {
          const fastApiResponseAnalyze = await fetch('http://127.0.0.1:8000/analyze_data/', {
            method: 'POST',
            body: (() => {
              const formData = new FormData();
              formData.append('file', file);
              if (api_key) {
                formData.append('api_key', api_key.toString());
              }
              return formData;
            })(),
          }); 
          if (!fastApiResponseAnalyze.ok) throw new Error(`HTTP error! status: ${fastApiResponseAnalyze.status}`);
          const data = await fastApiResponseAnalyze.json()
          return NextResponse.json(data,{status:200})
        } catch (error) {
          console.log(error)
          return NextResponse.json({error: error},{status:500})
        }
      }

      if(query && query=="file"){
        try {
          const fastApiResponseFile = await fetch('http://127.0.0.1:8000/clean_data/', {
            method: 'POST',
            body: (() => {
              const formData = new FormData();
              formData.append('file', file);
              if (mode) {
                formData.append('mode', mode.toString());
              }
              return formData;
            })(),
          });
        if (!fastApiResponseFile.ok) throw new Error(`HTTP error! status: ${fastApiResponseFile.status}`);
  
        // Get the response as a blob
        const blob = await fastApiResponseFile.blob();
        const buffer = await blob.arrayBuffer();
  
        // Create a new response with the cleaned file
        return new NextResponse(Buffer.from(buffer), {
          headers: {
            'Content-Type': fastApiResponseFile.headers.get('Content-Type') || 'application/octet-stream',
            'Content-Disposition': fastApiResponseFile.headers.get('Content-Disposition') || 'attachment; filename=cleaned_file.csv',
          },
        });
        } catch (error) {
          console.log(error)
          return NextResponse.json({error:error},{status:500})
        }
      


      }
      
      if(query && query=="explain"){

        try {
          const fastApiResponseExplain = await fetch('http://127.0.0.1:8000/cleaning_steps/', {
            method: 'POST',
            body: (() => {
              const formData = new FormData();
              formData.append('file', file);
              if (mode) {
                formData.append('mode', mode.toString());
              }
              if (api_key) {
                formData.append('api_key', api_key.toString());
              }
              return formData;
            })(),
          });
    
          if (!fastApiResponseExplain.ok) throw new Error(`HTTP error! status: ${fastApiResponseExplain.status}`);
          const data = await fastApiResponseExplain.json()
          return NextResponse.json(data,{status:200})

        } catch (error) {
          console.log(error)
          return NextResponse.json({error: error},{status:500})
        }        
      }
      
    } catch (error) {
      console.error('Error processing file with FastAPI:', error);
      return NextResponse.json({ error: 'Error processing file' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}