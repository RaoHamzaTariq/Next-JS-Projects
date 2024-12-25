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
  image?: SanityImageSource;
}

// Define an interface for the Main Image
export interface MainImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string; // Optional alt text for the image
}
interface PortableTextBlock {
  _key: string; // Unique key for the block
  _type: 'block'; // Type of the block
  children: Array<{
      _key: string; // Unique key for each child
      _type: 'span'; // Type of the child, typically a span for text
      marks: string[]; // Array of marks (e.g., bold, italic)
      text: string; // The actual text content
  }>;
  markDefs?: Array<{
      _key: string; // Unique key for the mark definition
      _type: string; // Type of the mark (e.g., link)
      href?: string; // URL if it's a link
  }>;
  style?: string; // Optional style (e.g., heading, normal)
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
  body: PortableTextBlock; // Use a specific type if you have a defined structure for Portable Text
  author?: Author; // Optional author reference
}

// Example usage in your API endpoint
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { NextResponse } from 'next/server';

export async function GET() {
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
    console.error('Error fetching posts:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); // Return specific error message
  }
}
