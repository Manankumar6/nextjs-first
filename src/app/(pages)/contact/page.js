'use client'
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import { IoLogoLinkedin } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
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
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  // Submit handler for the form
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        'service_lmesuip',
        'template_jglz5li',
        form.current,
        'MGv5r9pMB5EgAO-nl'
      );
      setResponseMessage('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error.text);
      setResponseMessage('An error occurred while sending your message.');
    } finally {
      setLoading(false);
      setFormData({
        name: '',
        user_email: '',
        message: '',
      });
    }
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
              <form ref={form} onSubmit={sendEmail}>
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
                    name="user_email" 
                    value={formData.user_email} 
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
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              {responseMessage && <p className="mt-4 text-center text-green-600">{responseMessage}</p>}
            </div>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <ul className="list-none space-y-4">
                
                <li className="flex items-center">
                <FaPhone className='text-indigo-500 w-5 h-5 mr-2'/>

                  <span>+91 6398401607</span>
                </li>
                <li className="flex items-center  ">
                <CgMail className='text-indigo-500 w-6 h-6 mr-2'/>


                  <span>manankumar2019@gmail.com</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Follow Us</h2>
                <div className="flex space-x-4 mt-4">
                  <Link target='_blank' href="https://www.instagram.com/manankumar_06/?igsh=NzQxYzZiM3o3aWdw" className="text-gray-500 hover:text-indigo-500 transition">
                  <AiFillInstagram className=' w-6 h-6 '  />

                  </Link>
                  <Link target='_blank' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-gray-500 hover:text-indigo-500 transition">
                  <IoLogoLinkedin className=' w-6 h-6 '/>

                  </Link>
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
