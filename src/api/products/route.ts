import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL + '/products');
        const data = await response.json();
        
        if (response?.ok) {
            return NextResponse.json({
                success: true,
                data
            });
        }

        return NextResponse.json(
            { error: 'sorry you cannot fetch product data' },
            { status: 500 }
        );

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: 'sorry you cannot fetch product data' },
            { status: 500 }
        );
    }
}