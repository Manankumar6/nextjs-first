/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all API routes
                source: '/api/:path*',
                
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://techcanva.in', // Adjust to your frontend URL or use '*' for all
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, PATCH, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization',
                    },
                ],
            },
        ];
    }, images: {
        domains: ['plus.unsplash.com'], // Add external image domains here
      },
};

export default nextConfig;
