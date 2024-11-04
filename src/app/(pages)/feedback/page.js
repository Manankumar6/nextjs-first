'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '@/app/context/AuthContext';
import { useToast } from '@chakra-ui/react';
import Slider from 'react-slick';

const Feedback = () => {
    const { authenticate, user } = useAuth();
    const toast = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const [feedbackList, setFeedbackList] = useState([]);

    const inputHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();

        if (!authenticate) {
            toast({
                title: "Please login",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

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

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 text-gray-700">
            <section className="text-center py-20 px-4 bg-indigo-600 text-white">
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
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={inputHandle}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                        required
                    />
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={inputHandle}
                        placeholder="Your Feedback"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                        rows="5"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Submit Feedback
                    </button>
                </form>
            </section>

            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
                <Slider {...sliderSettings} className="mt-8">
                    {feedbackList.length > 0 ? (
                        feedbackList.map((feedback) => (
                            <div key={feedback._id} className="bg-white p-6 rounded-lg shadow-md mx-2 md:mx-4 flex flex-col feedback-card" style={{ minHeight: '250px' }}>
                                <p className="text-lg flex-grow overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                                    "{feedback.feedback}"
                                </p>
                                <p className="mt-4 font-semibold">- {feedback.name}</p>
                            </div>
                        ))
                    ) : (
                        <p>No feedback available yet.</p>
                    )}
                </Slider>
            </section>

            <section className="bg-indigo-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Want to Share More?</h2>
                    <p className="mt-4 max-w-lg mx-auto text-lg">
                        We’re always here to listen and improve. Get in touch with us directly if you have more to share.
                    </p>
                    <Link href='/contact'>
                        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Feedback;
