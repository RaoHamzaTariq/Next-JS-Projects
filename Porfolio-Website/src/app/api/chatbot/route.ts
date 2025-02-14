

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    const { message, apiKey, temperature } = await req.json();

    try {
        const response = await fetch('https://raohamzatariq-chatbot-backend.hf.space/chat', { // Adjust URL if needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, apiKey, temperature }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.detail || 'Error communicating with backend' }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
