// Define an interface for the Author
export interface Author {
  _id: string;
  name: string;
  bio: Array<{
    _key: string;
    _type: string;
    children?: Array<{
      _key: string;
      _type: string;
      text: string;
    }>;
  }>;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

// Define an interface for the Main Image
export interface MainImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string; // Optional alt text for the image
}

// Define an interface for the Blog Post
export interface BlogPost {
  _id: string;
  title: string;
  shortDesc:string;
  slug: {
    current: string; // Assuming slug has a 'current' field
  };
  publishedAt: string; // ISO date string
  mainImage?: MainImage; // Optional main image
  body: any; // Use a specific type if you have a defined structure for Portable Text
  author?: Author; // Optional author reference
}

// Example usage in your API endpoint
import { client } from '@/sanity/lib/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const data = await client.fetch<BlogPost[]>(`*[_type == "post"]{
      _id,
      title,
      slug,
      shortDesc,
      publishedAt,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      body,
      author->{
        _id,
        name,
        bio,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    }`);
    
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
