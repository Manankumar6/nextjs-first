import React from 'react';

const EventPage = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed tracking-wide">
            {/* Hero Section */}
            <section className="text-center py-20 bg-indigo-700 text-white">
                <h1 className="text-5xl font-bold">Special Offer This Month!</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Get your stunning static website developed for just <span className="font-bold text-xl">₹6,999!</span>
                </p>
            </section>

            {/* Offer Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Limited Time Offer</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700">
                    Our regular price for a static website is 
                    <span className="line-through text-red-600 ml-1">₹15,000</span>. 
                    This month, you can avail it for only 
                    <span className="font-bold text-xl">₹6,999!</span>
                </p>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-indigo-600">What You Get:</h3>
                    <ul className="list-disc list-inside mt-4 text-left text-gray-700">
                        <li>5-page stunning and responsive website design</li>
                        <li>1 year of free hosting and domain</li>
                        <li>1 business email setup</li>
                        <li>Fast loading speed and SEO optimized</li>
                        <li>Contact form integration</li>
                        <li>1 month of free maintenance and support</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <a 
                        href="/contact" 
                        className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition duration-300"
                    >
                        Claim Your Offer Now
                    </a>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700">
                    We are dedicated to delivering high-quality websites that not only look great but also perform excellently. 
                    Our team of experienced professionals ensures that your project is completed on time and meets all your requirements.
                </p>
            </section>

            {/* Contact Information Section */}
            <section className="bg-indigo-700 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Need More Information?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        If you have any questions regarding this offer, feel free to reach out to us at 
                        <a href="mailto:support@techcanvas.com" className="underline"> support@techcanvas.com</a> or visit our 
                        <a href="/contact" className="underline"> Contact Us</a> page.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default EventPage;
