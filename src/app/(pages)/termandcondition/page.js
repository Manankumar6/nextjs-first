import Link from 'next/link';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 font-sans leading-relaxed tracking-wide">
      {/* Hero Section */}
      <section className="text-center py-20 bg-indigo-700 dark:bg-background dotted-background text-white">
        <h1 className="md:text-5xl text-3xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Welcome to TechCanva. Please read these terms and conditions carefully before using our services.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="container dark:text-gray-200 mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400 ">
          By accessing or using TechCanva’s web development services, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      {/* User Responsibilities Section */}
      <section className="container dark:text-gray-200 mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">User Responsibilities</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          Users are responsible for maintaining the security of their accounts and ensuring that all activities under their accounts comply with our terms. Any unlawful or unauthorized use of our services is strictly prohibited.
        </p>
      </section>

      {/* Payment Terms Section */}
      <section className="container dark:text-gray-200 mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div className="p-8 bg-white  dark:bg-background rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-indigo-600">Payments & Billing</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            All fees for our services are due upon receipt of an invoice. Failure to make timely payments may result in service suspension.
          </p>
        </div>
        <div className="p-8 bg-white  dark:bg-background rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-indigo-600">Refunds</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Refunds are available only under certain circumstances as specified in our Refund Policy. Please review this policy before initiating a refund request.
          </p>
        </div>
        <div className="p-8 bg-white  dark:bg-background rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-indigo-600">Termination of Service</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            TechCanva reserves the right to terminate or suspend services for any user who violates these terms or engages in harmful activities.
          </p>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Intellectual Property</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            All content, designs, and technology provided by TechCanva are protected under intellectual property laws. Unauthorized use of our intellectual property is prohibited.
          </p>
          <ul className="mt-8 grid gap-8 md:grid-cols-3 text-left">
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100">✓</span>
              <span className="ml-4">Ownership of Designs</span>
            </li>
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100">✓</span>
              <span className="ml-4">License of Use</span>
            </li>
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100">✓</span>
              <span className="ml-4">Prohibited Activities</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="container dark:text-gray-200 mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold">Limitation of Liability</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="bg-white dark:bg-background  p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              TechCanva is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
            <p className="mt-4 font-semibold">Limitation Clause</p>
          </div>
          <div className="bg-white dark:bg-background  p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Our liability in connection with any claim arising from service usage will not exceed the amount paid by the user for that service.
            </p>
            <p className="mt-4 font-semibold">Cap on Liability</p>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Governing Law</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and any disputes will be subject to the exclusive jurisdiction of the courts.
          </p>
          <Link href="/contact">
            <p className="inline-block mt-8 px-8 py-4 bg-white text-indigo-700 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
              Contact Us for More Info
            </p>
          </Link>
        </div>
        
      </section>
    </div>
  );
};

export default TermsAndConditions;
