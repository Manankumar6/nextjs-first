'use client'
import React, { useState } from 'react';

const Contact = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Input handler to update state
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit handler for the form
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Example submission logic (you can replace this with actual submission code)
    console.log('Form submitted:', formData);

    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Optionally, show a success message or perform additional actions
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Contact Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you! Whether you have a question about services, pricing, or anything else, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={inputHandler} 
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={inputHandler} 
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={inputHandler} 
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.39 3.11a1 1 0 00.88.61h13.46a1 1 0 00.88-.61L21 10M3 10V6a1 1 0 011-1h16a1 1 0 011 1v4m-18 0h18m0 0v5a1 1 0 01-1 1h-1.54a1 1 0 00-.88.61L15 20H9l-2.58-5.39a1 1 0 00-.88-.61H3.5a1 1 0 01-1-1V10z" />
                  </svg>
                  <span>1234 Web Services St, Suite 100</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.39 3.11a1 1 0 00.88.61h13.46a1 1 0 00.88-.61L21 10M3 10V6a1 1 0 011-1h16a1 1 0 011 1v4m-18 0h18m0 0v5a1 1 0 01-1 1h-1.54a1 1 0 00-.88.61L15 20H9l-2.58-5.39a1 1 0 00-.88-.61H3.5a1 1 0 01-1-1V10z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.97 3.6A6.005 6.005 0 003.03 7H6l1.5 2L6 11h3l3 3h1.5l1.5-3h3l1.5 2L18 9h2.97a6.005 6.005 0 00-4-5.4zm3.54 9.4a1.997 1.997 0 110 3.997 1.997 1.997 0 010-3.997z" />
                  </svg>
                  <span>info@webservices.com</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Follow Us</h2>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22.54 6.42c.02.2.02.4.02.6 0 6.2-4.73 13.33-13.33 13.33-2.66 0-5.13-.77-7.2-2.1a9.68 9.68 0 007.07-1.97A4.84 4.84 0 013.6 12.7a6.07 6.07 0 002.18-.08 4.82 4.82 0 01-3.87-4.74v-.06a4.9 4.9 0 002.2.6 4.84 4.84 0 01-1.5-6.45A13.71 13.71 0 0012 8.27a4.84 4.84 0 01-7.93 4.4A13.73 13.73 0 0012 6c-2.54 0-4.87 2.09-4.87 4.68 0 .36 0 .72.06 1.07a13.69 13.69 0 009.75-3.24 9.44 9.44 0 01-2.09 2.09z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M23.5 6.25h-3.25v-.85C20.25 2.1 19.15 0 17.25 0c-1.9 0-3 2.15-3 3.9v2.35H11.5c-.18 0-.25.07-.25.25V12c0 .18.07.25.25.25h2.75v11h2.25v-11H21c.18 0 .25-.07.25-.25V6.5c0-.18-.07-.25-.25-.25h-2.75V4.75c0-.25.18-.75.75-.75.9 0 2.5 1.05 2.5 2.35v.85z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
