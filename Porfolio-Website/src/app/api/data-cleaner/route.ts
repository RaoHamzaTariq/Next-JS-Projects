import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get('query');  // Getting the query parameter from the URL
    const formData = await req.formData();  // Getting the form data (file, api_key, etc.)

    const file = formData.get('file') as File;
    const apiKey = formData.get('api_key') as string;

    if (!file || !apiKey) {
      return NextResponse.json({ error: 'Missing file or API key' }, { status: 400 });
    }

    // Define the API URL for your FastAPI server
    const API_URL = "https://raohamzatariq-ai-agents.hf.space" 

    let fastApiEndpoint = '';
    let body = formData;

    // Check the query parameter and choose the appropriate FastAPI endpoint
    if (query === 'analyze') {
      fastApiEndpoint = '/analyze_data';
    } else if (query === 'clean') {
      const mode = formData.get('mode') as string;  // Get the cleaning mode (normal or ml)
      if (!mode) {
        return NextResponse.json({ error: 'Missing mode for clean operation' }, { status: 400 });
      }
      fastApiEndpoint = '/clean_data';
      body.append('mode', mode);  // Add mode to the body for cleaning
    } else {
      return NextResponse.json({ error: 'Invalid query parameter' }, { status: 400 });
    }

    // Make the request to FastAPI
    const response = await fetch(`${API_URL}${fastApiEndpoint}`, {
      method: 'POST',
      body: body,
    });

    if (!response.ok) {
      throw new Error(`FastAPI request failed: ${response.statusText}`);
    }

    const data = await response.json();

    // Return the response from FastAPI to the client
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
