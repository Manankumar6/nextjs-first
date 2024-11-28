'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatOurClientsSay from '@/app/_components/WhatOurClientsSay';

import { BentoGridDemo } from '@/app/_components/Bentogrid';
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
      once: false, // Repeat animation on every scroll
    });
    fetchFeedback()
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

    <div className="w-full bg-gray-900">


    {/* <BentoGridDemo/> */}
    </div>






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

    



      {/* Testimonials Section */}
      <WhatOurClientsSay />
      

      {/* Comments Section
           <section className="container dark:bg-gray-900 mx-auto px-6 py-10">
                <h3 className="text-3xl text-foreground font-semibold mb-4">Leave a Comment</h3>
                <div className="bg-white dark:bg-background p-6 rounded-lg shadow-md">
                    <textarea 
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
                        rows="4" 
                        placeholder="Write your comment here..."
                    />
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300">
                        Submit
                    </button>
                    </div>
            </section> */}


      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 dark:bg-gray-900 dark:text-gray-300 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today to discuss how our plans can elevate your business.
        </p>
        <Link href='/contact'>
          <button className="bg-indigo-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-indigo-600 animate-bounce mt-10 ">
            Get in Touch
          </button>
        </Link>
      </section>



    </div >
    
  );
} 

export default Page;
