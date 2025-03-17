import { client } from '@/sanity/lib/client';
import { NextResponse,NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
  const category = request.nextUrl.searchParams.get('category');
  const slug = request.nextUrl.searchParams.get('slug');
  if (category) {
    try {
      const data = await client.fetch(`*[_type == "portfolio" && category == "${category}"]`);
      return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
      console.error('Error fetching projects:', error);
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
  }
  if(slug) {
    try {
      const data = await client.fetch(`*[_type == "portfolio" && slug.current == "${slug}"][0]`);
      return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
      console.error('Error fetching projects:', error);
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
  } 
}