"use client"
const { createContext, useContext, useState, useEffect } = require("react");
import { useToast } from '@chakra-ui/react';
import axios from 'axios'
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [authenticate, setAuthenticate] = useState(false);
    const [user, setUser] = useState({});
    const toast = useToast();

    const checkAuth = async () => {
        try {

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`);
            if (data) {
                setUser(data.user)
                setAuthenticate(true);

            }
        } catch (error) {
            console.log(error);
            setAuthenticate(false);

        }
    }

    const login = async (email, password) => {
        setAuthenticate(false);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        try {
            const { data } = await axios.post(`${API_URL}/api/auth`, {
                email,
                password,
                action: 'login',
            });

            if (data) {
                toast({
                    title: "Login successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                router.push('/'); // Redirect to home or dashboard
                setAuthenticate(true);
            }

        } catch (error) {
            console.log(error);
            toast({
                title: "Login failed",
                description: error.response?.data?.message || "Internal server error",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            setAuthenticate(false);
        }
    }

    const logout = async () => {
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, { action: 'logout' })
            if (data) {
                router.push('/login')
                toast({
                    title: data.message,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                setAuthenticate(false);
            }
        } catch (error) {
            console.log(error)
            toast({
                title: error.response.data.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
           
        }

    }
    useEffect(() => {
        checkAuth();
    }, [])



    return (
        <AuthContext.Provider value={{ authenticate, user,login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
};
