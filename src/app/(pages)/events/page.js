import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const EventPage = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed tracking-wide dark:bg-background dark:text-white">
            {/* Hero Section */}
            <section className="text-center py-20 bg-indigo-700 text-white dark:bg-background dotted-background dark:text-white">
                <h1 className="text-2xl md:text-4xl font-bold">Special Offer This Month!</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Get your stunning static website developed for just <span className="font-bold text-xl">₹6,999!</span>
                </p>
            </section>

            {/* Offer Section */}
            <section className="container dark:bg-gray-900 mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Limited Time Offer</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                    Our regular price for a static website is
                    <span className="line-through text-red-600 ml-1">₹15,000</span>.
                    This month, you can avail it for only
                    <span className="font-bold text-xl">₹6,999!</span>
                </p>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto dark:bg-background dark:text-white">
                    <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">What You Get:</h3>
                    <ul className="list-disc list-inside mt-4 text-left text-gray-700 dark:text-gray-300">
                        <li>5-page stunning and responsive website design</li>
                        <li>1 year of free hosting and domain</li>
                        <li>1 business email setup</li>
                        <li>Fast loading speed and SEO optimized</li>
                        <li>Contact form integration</li>
                        <li>1 month of free maintenance and support</li>
                    </ul>
                </div>
                <div className="mt-10 flex justify-center animate-bounce">
                    <Link
                        href="/contact"
                        className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition duration-300 space-x-2 dark:bg-background dark:text-white dark:hover:bg-indigo-600"
                    >
                       <span>Claim Your Offer Now</span>
                       <FaArrowRightLong />
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-16 text-center dotted-background">
                <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                    We are dedicated to delivering high-quality websites that not only look great but also perform excellently.
                    Our team of experienced professionals ensures that your project is completed on time and meets all your requirements.
                </p>
            </section>

            {/* Contact Information Section */}
            <section className="bg-indigo-700 text-white py-16 dark:bg-gray-900 dark:text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Need More Information?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        If you have any questions regarding this offer, feel free to reach out to us at
                        <a href="mailto:support@techcanva.in" className="underline"> support@techcanva.in</a> or visit our
                        <a href="/contact" className="underline"> Contact Us</a> page.
                    </p>
                </div>
            </section>
            <div className="py-10 flex justify-center">
                <Link href="/service" className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition duration-300 space-x-2  dark:text-white dark:hover:bg-indigo-600">
                    <span>Explore More</span>
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    );
};

export default EventPage;
