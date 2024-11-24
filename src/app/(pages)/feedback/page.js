'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '@/app/context/AuthContext';
import { useToast } from '@chakra-ui/react';
import WhatOurClientsSay from '@/app/_components/WhatOurClientsSay';
// import { Card, CardContent } from "@/components/ui/card";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";

const Feedback = () => {
    const { authenticate, user } = useAuth();
    const toast = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    // const [feedbackList, setFeedbackList] = useState([]);

    const inputHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();

        // if (!authenticate) {
        //     toast({
        //         title: "Please login",
        //         status: "error",
        //         duration: 3000,
        //         isClosable: true,
        //     });
        //     return;
        // }

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Feedback submitted successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });

                setFormData({
                    name: '',
                    email: '',
                    feedback: ''
                });
                fetchFeedback();
            } else {
                toast({
                    title: data.message || "Failed to submit feedback",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            toast({
                title: "An error occurred. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const fetchFeedback = async () => {
        try {
            const response = await fetch('/api/feedback');
            const data = await response.json();

            if (response.ok) {
                setFeedbackList(data);
            } else {
                console.error("Failed to fetch feedback:", data.message);
            }
        } catch (error) {
            console.error("Error fetching feedback:", error);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
        fetchFeedback();
    }, []);

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                name: user.name,
                email: user.email
            }));
        }
    }, [user]);

    return (
        <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <section className="text-center py-20 px-4 bg-indigo-600 text-white dark:bg-background dotted-background">
                <h1 className="text-2xl md:text-4xl font-bold">We Value Your Feedback</h1>
                <p className="mt-4 text-lg max-w-xl mx-auto">
                    Let us know how we can improve our services and make your experience even better.
                </p>
            </section>

            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold">Share Your Thoughts</h2>
                <p className="mt-4 text-lg">
                    Please take a moment to let us know about your experience with our services.
                </p>
                <form className="mt-8 max-w-lg mx-auto space-y-4" onSubmit={submitHandle} data-aos="fade-up">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={inputHandle}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={inputHandle}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                        required
                    />
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={inputHandle}
                        placeholder="Your Feedback"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                        rows="5"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition dark:hover:bg-indigo-700"
                    >
                        Submit Feedback
                    </button>
                </form>
            </section>

        <WhatOurClientsSay/>
            {/* <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-[90%] sm:max-w-[40rem] md:max-w-[55rem] mx-auto"
                >
                    <CarouselContent>
                        {feedbackList.map((feed, index) => (
                            <CarouselItem key={index} className="sm:basis-3/4 md:basis-1/2 lg:basis-1/3 px-2">
                                <div className="p-4">
                                    <Card className="w-full max-w-[300px] sm:max-w-[250px] h-[200px] mx-auto">
                                        <CardContent className="flex flex-col h-full items-center justify-center p-4">
                                            <span>{feed.feedback}</span>
                                            <p className='text-right italic'>-{feed.name}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section> */}

            <section className="bg-indigo-600 text-white py-16 dark:bg-background dotted-background">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Want to Share More?</h2>
                    <p className="mt-4 max-w-lg mx-auto text-lg">
                        We’re always here to listen and improve. Get in touch with us directly if you have more to share.
                    </p>
                    <Link href='/contact'>
                        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Feedback;
