// /middleware/cors.js

import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origins
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: res.headers,
        });
    }

    return res;
}
