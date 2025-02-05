'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/moving-border';
import Heading from '@/app/_components/Heading';
import MovingCircle from '@/components/MovingCircle';

const Contact = () => {
  const form = useRef();
  const { authenticate, user } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    siteType: 'business',
    plan: 'basic',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!authenticate) {
      router.push('/login');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "An error occurred while sending your message.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: "An error occurred while sending your message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        siteType: 'business', // Reset all fields
        plan: 'basic', // Reset all fields
        phone: ''
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || '', // Fallback to empty string if undefined
        email: user.email || '' // Fallback to empty string if undefined
      }));
    }
  }, [user])
  return (
    <div className="bg-gray-100 dark:bg-background dotted-background mt-24 ">
      <div className="container mx-auto px-4">
        <section className="text-center relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
          <div className="relative z-30"> {/* Added relative and z-index */}
            <MovingCircle count={8} />

            <h1 className='text-4xl md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in'>Contact Us</h1>
            <p
              className="mt-4 text-lg max-w-xl mx-auto slide-in animate-move"
              style={{ animationDelay: '0.2s' }}
            >
              We'd love to hear from you! Whether you have a question about services, pricing, or anything else, feel free to reach out.
            </p>


          </div>

          {/* Background Shape */}
          <div className="w-1/2 h-[31rem] rounded-full min-h-full bg-slate-700 absolute  md:-right-20 -right-20 -top-16   md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in  "></div>
        </section>


        <div className="flex flex-wrap pt-10 justify-center">
          <div className="w-full lg:w-1/2 md:p-4 ">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 md:p-8" data-aos="fade-up"
              data-aos-delay={100}>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Get in Touch</h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <Input

                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={inputHandler}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <Input

                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={inputHandler}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="text">
                    Phone
                  </label>
                  <Input

                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={inputHandler}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    placeholder="Your Phone no"
                    required
                  />
                </div>
                <div className='flex '>

                  <div className="mb-4 w-1/2 me-2 ">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="plan">
                      Select Plan
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={inputHandler}
                      className="bg-gradient-to-br w-full dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 
                      dark:bg-zinc-800
                      bg-neutral-200 text-gray-800
                     
                     "
                      required
                    >

                      <option value="basic" >Basic</option>
                      <option value="premium">Premium</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="siteType">
                      Type of Site
                    </label>
                    <select
                      id="siteType"
                      name="siteType"
                      value={formData.siteType}
                      onChange={inputHandler}
                      className="bg-gradient-to-br w-full dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 
                      dark:bg-zinc-800
                      bg-neutral-200 text-gray-800 "
                      required
                    >

                      <option value="business" >Business</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="blog">Blog</option>
                      <option value="blog">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={inputHandler}
                    className="bg-gradient-to-br w-full dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 
                    dark:bg-zinc-800
                    bg-neutral-200 text-gray-800 "
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    borderRadius="2rem"
                    className="bg-indigo-200 dark:bg-background font-light text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
              {responseMessage && <p className="mt-4 text-center text-green-600">{responseMessage}</p>}
            </div>
          </div>

          <div className="w-full lg:w-1/2 md:p-4 mt-2" data-aos="fade-up"
            data-aos-delay={200}>
            <div className="bg-white dark:bg-gray-900 shadow-lg dark:text-gray-300 rounded-lg p-4 md:p-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left mb-4">Contact Information</h2>

              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <Phone className='text-green-500 w-5 h-5 mr-2' />
                  <span>+91 6398401607</span>
                </li>
                <li className="flex items-center">
                  <Mail className='text-blue-500 w-6 h-6 mr-2' />
                  <Link target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=support@techcanva.in&su=Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..." className="text-indigo-500 hover:underline">
                    support@techcanva.in
                  </Link>
                </li>
                <li className="flex items-center">
                  <Mail className='text-blue-500 w-6 h-6 mr-2' />
                  <Link target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=info@techcanva.in&su=Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..." className="text-indigo-500 hover:underline">
                    info@techcanva.in
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Follow Us</h2>
                <div className="flex space-x-4 mt-4">
                  <Link target='_blank' href="https://www.instagram.com/manankumar_06/?igsh=NzQxYzZiM3o3aWdw" className="text-gray-500 hover:text-purple-500 transition">
                    <AiFillInstagram className='w-6 h-6' />
                  </Link>
                  <Link target='_blank' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-gray-500 hover:text-indigo-500 transition">
                    <IoLogoLinkedin className='w-6 h-6' />
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@techcanva.com&su=Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..."
                    target="_blank"
                    className="text-gray-500 hover:text-yellow-500 transition"
                  >
                    <IoMail className='w-6 h-6' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 mt-2 bg-white shadow-lg rounded-lg p-4 md:p-8 relative' style={{
              width: '100%', height: "350px", borderRadius: '0.5rem',  // Apply the border radius
              overflow: 'hidden',
            }}>
              <Image
                src="/image/contact.jpg"
                alt="contactjpg"
                fill
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
