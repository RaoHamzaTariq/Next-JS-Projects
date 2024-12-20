import { client } from '@/sanity/lib/client';
import { NextResponse,NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
  try {
    const data = await client.fetch(`*[_type == "data-analysis-project"]`);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}