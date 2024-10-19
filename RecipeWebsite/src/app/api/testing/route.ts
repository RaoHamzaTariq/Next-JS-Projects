// app/api/testing/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ name: 'John Doe' });
}

export async function POST(request: Request) {
    const data = await request.json();
    
    if (!data.nameLookup) {
        return NextResponse.json(
            { error: 'Please provide something to search for' },
            { status: 400 }
        );
    }

    // Process the valid request
    return NextResponse.json({ answer: data.nameLookup });
}