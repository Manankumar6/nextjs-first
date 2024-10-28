// src/app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();

    // Check if the request is for an API route
    if (req.url.startsWith('/api/')) {
        // Allow a specific origin (change to your production URL)
        res.headers.set('Access-Control-Allow-Origin', 'https://nextjs-first-phpx.vercel.app');
        
        // Specify allowed methods including PUT and PATCH
        res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
        
        // Specify allowed headers
        res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            return new Response(null, {
                status: 204, // No Content
                headers: res.headers,
            });
        }
    }

    return res;
}
