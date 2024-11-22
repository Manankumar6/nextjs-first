'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Page = () => {
  const features = [
    {
      icon: "/image/custom.webp",
      title: "Tailored Solutions",
      description: "We craft unique websites that reflect your brand's essence and vision.",
      delay: 100,
    },
    {
      icon: "/image/responsive.jpg",
      title: "Device Compatibility",
      description: "Enjoy flawless browsing across desktops, tablets, and smartphones.",
      delay: 200,
    },
    {
      icon: "/image/seo.jpg",
      title: "Search Engine Optimized",
      description: "Boost your online presence with websites built for higher rankings.",
      delay: 300,
    },
    {
      icon: "/image/service.gif",
      title: "Dedicated Support",
      description: "Our expert team is available round-the-clock to assist you.",
      delay: 400,
    },
  ];





  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Repeat animation on every scroll
    });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-20 px-4 dotted-background bg-indigo-600 dark:bg-background text-white">
        <h1 className="text-2xl md:text-4xl font-bold slide-in">Our Professional Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
          We offer comprehensive web solutions to help your business grow. Explore our different plans below.
        </p>
      </section>

     {/* Key Features Section */}
<section className="py-16 bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">What Sets Us Apart?</h2>
  <div className="flex flex-wrap justify-center gap-12">
    {features.map((feature, index) => (
      <div
        key={index}
        className="w-full md:w-1/3 lg:w-1/4 text-center"
        data-aos="fade-up"
        data-aos-delay={feature.delay}
      >
        <div className="flex flex-col items-center">
          <div className="bg-indigo-100  rounded-full shadow-md">
            <img src={feature.icon} alt={`${feature.title} Icon`} className="h-20 w-20 rounded-full" />
          </div>
          <h3 className="font-semibold text-lg mt-4 dark:text-gray-200 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Pricing Plans */}
      <div className="py-12 dark:bg-background dotted-background">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 mb-6">Pricing Plans</h2>

        <div className="flex flex-wrap justify-center">
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up"
            data-aos-delay={100}>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Basic Plan</h3>
              <p className="text-4xl font-bold text-gray-900  dark:text-gray-300mb-4 dark:text-gray-200">₹15,000</p>
              {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST ₹ 2700 )</p> */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small businesses or startups.</p>
              <ul className="mb-4 text-left dark:text-gray-400">
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
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up" data-aos-delay={200}>
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Premium Plan</h3>
    <p className="text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">₹25,000</p>
    {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST ₹ 4500 )</p> */}
    <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for growing businesses looking to scale.</p>
    <ul className="mb-4 text-left dark:text-gray-400">
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
          <div className="w-full md:w-1/3 p-4" data-aos="fade-up" data-aos-delay={300}>
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Custom Plan</h3>
    <p className="text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">Pricing Varies</p>
    {/* <p className="text-sm text-gray-600 mb-4">(+ 18% GST Applicable )</p> */}
    <p className="text-gray-600 dark:text-gray-300 mb-4">Tailored solutions based on your unique requirements.</p>
    <ul className="mb-4 text-left dark:text-gray-400">
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


      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3" data-aos="fade-up" data-aos-delay={100}>
            <div className="bg-white dark:bg-background shadow-lg rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-300">"Excellent service! The team understood our requirements perfectly and delivered beyond expectations."</p>
              <h4 className="font-semibold mt-4 dark:text-gray-400">- John Doe</h4>
            </div>
          </div>
          <div className="w-full md:w-1/3" data-aos="fade-up" data-aos-delay={200}>
            <div className="bg-white dark:bg-background shadow-lg rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-300">"Our new website looks amazing, and the performance is top-notch. Highly recommended!"</p>
              <h4 className="font-semibold mt-4 dark:text-gray-400">- Sarah Smith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-background dotted-background">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
            <h4 className="font-semibold text-lg dark:text-gray-300">Do you provide ongoing support?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Yes, all our plans include 24/7 support to assist you with any issues or updates.</p>
          </div>
          <div className="mb-6" data-aos="fade-up" data-aos-delay={200}>
            <h4 className="font-semibold text-lg dark:text-gray-300">How long does it take to build a website?</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Depending on the complexity, websites typically take 2-4 weeks to develop.</p>
          </div>
        </div>
      </section>

  


      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 dark:bg-gray-900 dark:text-gray-300 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today to discuss how our plans can elevate your business.
        </p>
        <Link href='/contact'>
          <button className="bg-indigo-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 mt-10 ">
            Get in Touch
          </button>
        </Link>
      </section>



    </div>
  );
};

export default Page;
