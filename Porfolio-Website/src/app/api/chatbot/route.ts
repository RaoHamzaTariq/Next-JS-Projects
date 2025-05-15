

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    const { messages, apiKey, temperature } = await req.json();

    try {
        const API_URL = "https://raohamzatariq-chatbot-backend.hf.space"
        const response = await fetch(`${API_URL}/chat`, { // Adjust URL if needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages, apiKey, temperature }),
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
