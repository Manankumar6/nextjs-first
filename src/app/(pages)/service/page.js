'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Repeat animation on every scroll
    });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-20 px-4 bg-indigo-600 text-white">
        <h1 className="text-2xl md:text-4xl font-bold slide-in">Our Professional Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
          We offer comprehensive web solutions to help your business grow. Explore our different plans below.
        </p>
      </section>

      {/* Pricing Plans */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Pricing Plans</h2>
        
        <div className="flex flex-wrap justify-center">
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up"
        data-aos-delay={100}>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Basic Plan</h3>
              <p className="text-4xl font-bold text-gray-900 mb-4">₹15,000</p>
              {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST ₹ 2700 )</p> */}
              <p className="text-gray-600 mb-4">Perfect for small businesses or startups.</p>
              <ul className="mb-4 text-left">
                <li>✔ 5 pages Website</li>
                <li>✔ 1 Year Free Domain Name ( .com, .in, .org )</li>
                <li>✔ 1 Year Free Hosting ( Unlimited Space )</li>
                <li>✔ Dynamic Website ( Premium Design )</li>
                <li>✔ Lifetime 24/7 Free Hosting Support</li>
                <li>✔ Unlimited Images & Videos Upload</li>
                <li>✔ Free SSL Certificates</li>
                <li>✔ Social Media Integration</li>
                <li>✔ 5 Free Email Id</li>
                <li>✔ 100% Responsive Website</li>
                <li>✔ Inquiry Form</li>
                <li>✔ 1 Year Free Technical Support For Website</li>
                <li>✔ Annual Renewal For Hosting ₹5000</li>
              </ul>
              <Link href='/contact'>
              <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">
                Choose Basic
              </button>
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up"
        data-aos-delay={200}>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Premium Plan</h3>
              <p className="text-4xl font-bold text-gray-900 mb-4">₹25,000</p>
              {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST ₹ 4500 )</p> */}
              <p className="text-gray-600 mb-4">Ideal for growing businesses looking to scale.</p>
              <ul className="mb-4 text-left">
                <li>✔ 12 pages Website</li>
                <li>✔ 1 Year Free Domain Name ( .com, .in, .org )</li>
                <li>✔ 1 Year Free Hosting ( Unlimited Space )</li>
                <li>✔ Dynamic Website ( Premium Design )</li>
                <li>✔ Admin Access</li>
                <li>✔ Google Search Console Setup</li>
                <li>✔ Lifetime 24/7 Free Hosting Support</li>
                <li>✔ Unlimited Images & Videos Upload</li>
                <li>✔ Free SSL Certificates</li>
                <li>✔ 10 Free Email Id</li>
                <li>✔ SEO Friendly Website</li>
                <li>✔ 100% Responsive Website</li>
                {/* <li>✔ Live Chat Integration</li> */}
                <li>✔ Payment Gateway Integration</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Call Button Integration</li>
                <li>✔ WhatsApp Button Integration</li>
                <li>✔ Inquiry Form</li>
                {/* <li>✔ Woocommerce Features</li> */}
                <li>✔ 1 Year Free Technical Support For Website</li>
                <li>✔ Annual Renewal For Hosting ₹6000</li>
              </ul>
              <Link href='/contact'>
              <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">
                Choose Premium
              </button>
              </Link>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up"
        data-aos-delay={300}>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Custom Plan</h3>
              <p className="text-4xl font-bold text-gray-900 mb-4">Pricing Varies</p>
              {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST Applicable )</p> */}
              <p className="text-gray-600 mb-4">Tailored solutions based on your unique requirements.</p>
              <ul className="mb-4 text-left">
                <li>✔ Pages: According to Requirement</li>
                <li>✔ 1 Year Free Domain Name ( .com, .in, .org )</li>
                <li>✔ 1 Year Free Hosting ( Unlimited Space )</li>
                <li>✔ Dynamic Website</li>
                <li>✔ Admin Access</li>
                {/* <li>✔ Google Search Console Setup</li> */}
                <li>✔ Lifetime 24/7 Free Hosting Support</li>
                <li>✔ Unlimited Images & Videos Upload</li>
                <li>✔ Free SSL Certificates</li>
                <li>✔ 5 Free Email Id</li>
                <li>✔ SEO Friendly Website</li>
                <li>✔ 100% Responsive Website</li>
                <li>✔ Live Chat Integration</li>
                <li>✔ Payment Gateway Integration</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Call Button Integration</li>
                <li>✔ WhatsApp Button Integration</li>
                <li>✔ Inquiry Form</li>
                {/* <li>✔ Woocommerce Features</li> */}
                <li>✔ 1 Year 24/7 Free Support For Website</li>
                <li>✔ Annual Renewal ₹6000</li>
              </ul>
              <Link href='/contact'>
              <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">
             Get a Quote
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today to discuss how our plans can elevate your business.
        </p>
        <Link href='/contact'>
        <button className="mt-8 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get in Touch
        </button>
        </Link>
      </section>
    </div>
  );
};

export default Page;
