import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({
        product: [
            {
                id: 1,
                name: "Strawberries",
                type: "fruit"
            }
        ]
    })
}