import Link from 'next/link';
import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed tracking-wide">
            {/* Hero Section */}
            <section className="text-center py-20 bg-indigo-700 text-white">
                <h1 className="md:text-5xl text-3xl font-bold">Refund Policy</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Our goal is to ensure complete satisfaction with every service we provide. Read our refund policy for more details.
                </p>
            </section>

            {/* Overview Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700">
                    This Refund Policy outlines the conditions under which you may request a refund for services purchased through TechCanva. We are committed to providing high-quality service and transparency for our clients.
                </p>
            </section>

            {/* Eligibility for Refund Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Eligibility for Refund</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700">
                    Refunds are available under certain conditions:
                </p>
                <ul className="mt-6 list-none list-inside  max-w-2xl mx-auto text-lg text-gray-700">
                    <li>Services were not rendered as outlined in the contract.</li>
                    <li>Quality of service did not meet the agreed standards.</li>
                    <li>Project cancellations requested before work has commenced.</li>
                </ul>
            </section>

            {/* Non-Refundable Services Section */}
            <section className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
                <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600">Custom Development</h3>
                    <p className="mt-4 text-gray-700">
                        Custom development projects require considerable time and resources, making them non-refundable once work has begun.
                    </p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600">Consultation Services</h3>
                    <p className="mt-4 text-gray-700">
                        Fees for consultations are non-refundable, as they are rendered upon agreement of service.
                    </p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600">Third-Party Fees</h3>
                    <p className="mt-4 text-gray-700">
                        Costs incurred from third-party services are non-refundable as they are outside our control.
                    </p>
                </div>
            </section>

            {/* Refund Process Section */}
            <section className="bg-indigo-700 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Refund Process</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">
                        To request a refund, please contact us at <Link href="mailto:support@techcanva.in" className="underline">support@techcanva.in</Link>. Provide details of the service, reason for the request, and any relevant documentation.
                    </p>
                    <ul className="mt-8 grid gap-8 md:grid-cols-3 text-left">
                        <li className="flex items-start">
                            <span className="text-3xl font-bold text-indigo-100">1.</span>
                            <span className="ml-4">Submit refund request via email</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-3xl font-bold text-indigo-100">2.</span>
                            <span className="ml-4">Request review within 5-7 business days</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-3xl font-bold text-indigo-100">3.</span>
                            <span className="ml-4">Refund processed to original payment method</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Timeframe for Refunds Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold">Timeframe for Refunds</h2>
                <div className="mt-8 grid gap-10 md:grid-cols-2">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-700">
                            Refunds are typically processed within 10-14 business days once approved. Processing times may vary depending on your financial institution.
                        </p>
                        <p className="mt-4 font-semibold">Standard Refund Period</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-700">
                            In some cases, additional documentation may be requested, which could extend the processing time.
                        </p>
                        <p className="mt-4 font-semibold">Extended Processing Time</p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="bg-indigo-700 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Need Help?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        If you have questions about this refund policy, please contact us at <Link href="mailto:support@techcanva.in" className="underline">support@techcanva.in</Link> or visit our <Link href="/contact"><span className="underline">Contact Us</span></Link> page.
                    </p>
                    <Link href="/contact">
                        <p className="inline-block mt-8 px-8 py-4 bg-white text-indigo-700 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
                            Contact Support
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;
