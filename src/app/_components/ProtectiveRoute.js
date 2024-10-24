'use client'
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Get the authentication state
    const router = useRouter();
    const pathname = usePathname();
    const protectedRoutes = ['/contact'];
    useEffect(() => {
        // If not authenticated, redirect to the login page
        if (!isAuthenticated && protectedRoutes.includes(pathname)) {
            router.push('/not-authenticate'); // Change to your login page route
        }
    }, [isAuthenticated, router,pathname]);

    // If not authenticated, return null or a loading state
    

    if (!protectedRoutes.includes(pathname) || isAuthenticated) {
        return <> {children}</>;
    }

    // You can return a loading state here while checking authentication
    return null;
};

export default ProtectedRoute;
