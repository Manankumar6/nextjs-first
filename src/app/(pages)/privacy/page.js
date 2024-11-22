import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 font-sans leading-relaxed tracking-wide">
            {/* Hero Section */}
            <section className="text-center py-20 bg-indigo-700 dark:bg-background dotted-background text-white">
                <h1 className="md:text-5xl text-3xl font-bold">Privacy Policy</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Your privacy is critically important to us. Learn more about our practices in handling personal data.
                </p>
            </section>

            {/* Introduction Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
                    TechCanva is committed to safeguarding your personal information and respects your privacy. This Privacy Policy outlines the types of information we collect and how it is used and protected.
                </p>
            </section>

            {/* Information Collection Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Information Collection</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
                    We collect various types of information, including:
                </p>
                <ul className="mt-6 list-none list-inside max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400">
                    <li>Personal information you provide (e.g., name, email, phone number).</li>
                    <li>Browsing and usage data collected via cookies and similar technologies.</li>
                    <li>Transactional information related to purchases on our platform.</li>
                </ul>
            </section>

            {/* Use of Information Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-4">Use of Information</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
                    We use your data to:
                </p>
                <ul className="mt-6 list-none list-inside max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400">
                    <li>Provide and improve our services.</li>
                    <li>Communicate updates, offers, and other relevant information.</li>
                    <li>Ensure compliance with legal obligations and platform policies.</li>
                </ul>
            </section>

            {/* Data Protection Section */}
            <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Data Protection</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">
                        We take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of your data.
                    </p>
                </div>
            </section>

            {/* Your Rights Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold">Your Rights</h2>
                <div className="mt-8 grid gap-10 md:grid-cols-2">
                    <div className="bg-white dark:bg-background dotted-background p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                            You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
                        </p>
                        <p className="mt-4 font-semibold">Data Access & Correction</p>
                    </div>
                    <div className="bg-white dark:bg-background dotted-background p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                            You can also opt out of communications and restrict data usage as per applicable laws.
                        </p>
                        <p className="mt-4 font-semibold">Communication & Data Restrictions</p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Contact Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        For any questions or concerns regarding this privacy policy, please contact us at <Link href="mailto:support@techcanva.in" className="underline">support@techcanva.in</Link> or visit our <Link href="/contact"><span className="underline">Contact Us</span></Link> page.
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

export default PrivacyPolicy;
