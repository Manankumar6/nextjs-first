'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Set animation duration in milliseconds
      once: false,   // Allows animations to repeat on every scroll
    });
  }, []);
  return (
    <div className="bg-gray-100 text-gray-700">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-indigo-600 text-white">
        <h1 className="text-2xl md:text-4xl font-bold slide-in">About Our Web Services</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
          We are committed to delivering top-notch web solutions to help your business thrive online.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          To empower businesses with scalable, secure, and user-friendly web applications that meet industry standards and exceed customer expectations.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3" data-aos="fade-up"
        data-aos-delay={100}>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">Custom Web Development</h3>
          <p className="mt-4">Developing modern, responsive websites that deliver exceptional user experiences and meet business goals effectively.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">UI/UX Design</h3>
          <p className="mt-4">Crafting user-friendly designs that are visually appealing and optimized for intuitive user navigation.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">Performance Optimization</h3>
          <p className="mt-4">Enhancing your website’s speed and security to ensure fast load times and secure data handling.</p>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Our dedicated team of experts brings experience, reliability, and passion to each project, ensuring results that drive success.
          </p>
          <ul className="mt-8 grid gap-8 md:grid-cols-3 text-left">
            <li className="flex items-center mx-auto">
              <span className="text-4xl font-bold text-white">✓</span>
              <span className="ml-4">Experienced Developers</span>
            </li>
            <li className="flex items-center mx-auto">
              <span className="text-4xl font-bold text-white">✓</span>
              <span className="ml-4">Quality-Driven Approach</span>
            </li>
            <li className="flex items-center mx-auto">
              <span className="text-4xl font-bold text-white">✓</span>
              <span className="ml-4">Dedicated Support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-12 text-center" >
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2" data-aos="fade-up"
          data-aos-delay={100}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              "This team is amazing! They transformed our website and boosted our online traffic significantly."
            </p>
            <p className="mt-4 font-semibold">- Client A</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              "Professional, efficient, and always goes above and beyond. Highly recommend their services!"
            </p>
            <p className="mt-4 font-semibold">- Client B</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Ready to Grow Your Business?</h2>
          <p className="mt-4 max-w-lg mx-auto text-lg">
            Contact us today to discuss how we can help bring your vision to life with tailored web solutions.
          </p>
          <Link href='/contact'>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
