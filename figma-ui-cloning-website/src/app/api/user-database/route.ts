import { neon } from "@neondatabase/serverless";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const email = url.searchParams.get('email');
    const password = url.searchParams.get('password');

    const sql = neon(`${process.env.DATABASE_URL}`);

    if (email && password) {
        try {
            const response = await sql`
                SELECT * FROM users WHERE email = ${email} AND password = ${password}

            `;

            if (response.length === 0) {
                return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
            }

            return NextResponse.json({ user: response[0] });

        } catch (error) {
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }
    }

    try {
        const result = await sql`SELECT * FROM users`;
        return NextResponse.json({ users: result });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    const response = await request.json();  
    const sql = neon(`${process.env.DATABASE_URL}`);
    const result = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${response.username}, ${response.email}, ${response.password})
    `;
    return NextResponse.json({ result });
  }