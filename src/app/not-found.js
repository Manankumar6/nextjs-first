'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000); // Redirect after 3 seconds

        return () => clearTimeout(timer);
    }, [router]);
    return (
        <div className="h-screen bg-gray-900 text-gray-50 w-full flex flex-col justify-center items-center ">
            <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold  mb-4">Page Not Found</h2>
            <p className=" mb-6">Redirecting to the homepage...</p>
        </div>
    )
}

export default NotFound