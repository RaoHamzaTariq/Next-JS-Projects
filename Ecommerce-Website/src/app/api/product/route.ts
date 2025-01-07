import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        const searchParams = req.nextUrl.searchParams
        const id = searchParams.get("id")
        if(id){
          try{
            const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
          }catch{
           return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); // Return specific error message
          }
                  
        }
      
      return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
      console.error('Error fetching posts:', error); // Log the error for debugging
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); // Return specific error message
    }
  }
  