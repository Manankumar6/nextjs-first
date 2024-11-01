'use client'
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Client = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in ms
      once: false, // Only animate once on scroll
    });
  }, []);
  return (
    <section className="text-gray-600 body-font  py-12"   data-aos="fade-up"
    data-aos-delay={ 100}>
        <h1 className='text-center text-2xl font-bold text-indigo-600'>Our Completed Projects</h1>
  
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-5">
        {/* Image Column */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-4">
          <img
            className="object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
            alt="Student Survey Portal"
            src="/image/client.png" // Replace with your client's image URL
          />
        </div>
        
        {/* Text Column */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-2xl text-3xl  font-semibold text-gray-800">
            Student Survey Portal
           
          </h1>
            <span className='text-gray-400 text-sm mb-4'>Made for IT Computer Education World</span>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            "The Student Survey Portal is a comprehensive platform designed to gather feedback from students about their educational experiences. This project aims to enhance the learning environment by enabling educators to receive valuable insights directly from their students. The user-friendly interface and intuitive design make it easy for students to participate, fostering a sense of community and engagement."
          </p>
          <p className="font-bold italic text-indigo-700 mt-4">- (Client Name)</p>

          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow-md transition duration-300 ease-in-out">
              Learn More
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-md transition duration-300 ease-in-out">
              View Portfolio
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Client;
