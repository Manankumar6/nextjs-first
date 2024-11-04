'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '@/app/context/AuthContext';
import { useToast } from '@chakra-ui/react';

const Feedback = () => {
    const { authenticate, user } = useAuth();
    const toast = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const [feedbackList, setFeedbackList] = useState([]); // State for storing feedback data

    // Function to handle input change
    const inputHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
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
            // Make a POST request to the backend route
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
                fetchFeedback(); // Refresh the feedback list after submission
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

    // Fetch feedback data from API
    const fetchFeedback = async () => {
        try {
            const response = await fetch('/api/feedback');
            const data = await response.json();

            if (response.ok) {
                setFeedbackList(data); // Update state with fetched feedback
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
        fetchFeedback(); // Fetch feedback on component mount
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
        <div className="bg-gray-100 text-gray-700">
            <section className="text-center py-20 px-4 bg-indigo-600 text-white">
                <h1 className="text-2xl md:text-4xl font-bold slide-in">We Value Your Feedback</h1>
                <p className="mt-4 text-lg max-w-xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
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

            {/* Testimonials Section */}
            <section className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2" data-aos="fade-up" data-aos-delay={100}>
                    {feedbackList.length > 0 ? (
                        feedbackList.map((feedback) => (
                            <div key={feedback._id} className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-lg">
                                    "{feedback.feedback}"
                                </p>
                                <p className="mt-4 font-semibold">- {feedback.name}</p>
                            </div>
                        ))
                    ) : (
                        <p>No feedback available yet.</p>
                    )}
                </div>
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
