import { NextResponse,NextRequest } from "next/server";



export function GET(request:NextRequest){
    const url = request.nextUrl
    const name = url.searchParams.get('name')
    const age = url.searchParams.get('age')
    const isName = url.searchParams.has("name")
    return NextResponse.json({
        url:url,
        message:"Hello from Next.js API route",
        name: name,
        age: age,
        isName:isName
    })
}

export async function POST(request:NextRequest){

    const body = await request.json();
    console.log(body)

    return  NextResponse.json({name:body.name,age:body.age})
}