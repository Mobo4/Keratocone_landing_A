import { NextResponse } from 'next/server';

// IndexNow API key for keratocones.com
const INDEXNOW_KEY = '06c5cac5eef2410a9f5c3b56a6e5580c';

export async function GET() {
    return new NextResponse(INDEXNOW_KEY, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
