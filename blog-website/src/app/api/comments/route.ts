import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, comment, postId } = data;

  if (!name || !email || !comment || !postId) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const newComment = await client.create({
      _type: "comment",
      name,
      email,
      comment,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });
    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment }, // Fixed typo from 'commet' to 'comment'
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error); // Log the error for debugging
    return NextResponse.json(
      { message: "Failed to create a comment", error }, // Return specific error message
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const data = await client.fetch(`*[_type == "comment"]`);
    
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); // Return specific error message
  }
}