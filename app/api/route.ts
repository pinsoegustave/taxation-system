import { NextResponse } from "next/server";


export async function GET () {
    return NextResponse.json({
        hello: "world",
        name: "Gustave",
        work: "Software Dev",
        place: "Infinity",
    })
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({data, });
}