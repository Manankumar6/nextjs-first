"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import {

  Button,

} from '@chakra-ui/react';
import Head from 'next/head';
import Technology from '@/app/_components/Technology';
import Image from 'next/image';
import WhatOurClientsSay from '@/app/_components/WhatOurClientsSay';


const services = [
  {
    title: "Custom Web Development",
    text: `  Our custom web development services are tailored to create modern, responsive websites
              that deliver exceptional user experiences. From sleek designs to robust functionality,
              we ensure your website aligns with your business objectives and effectively engages your audience.
              Whether you're building an e-commerce store, a corporate site, or a personal portfolio, we've got you covered.`,
    img: "/image/customweb.jpg",
  },
  {
    title: "UI/UX Design",
    text: `Our UI/UX design services focus on creating intuitive, user-friendly interfaces that engage users effectively. 
           We ensure every element of your design enhances user interaction, fostering seamless navigation and an overall enjoyable experience.`,
    img: "/image/ui.jpg",
  },
  {
    title: "Performance Optimization",
    text: `Boost your website's speed and performance with our optimization services. 
           From faster load times to enhanced responsiveness, we ensure your site meets the highest performance standards, improving user satisfaction and SEO rankings.`,
    img: "/image/seo.jpg",
  },
];


const About = () => {
  const [feedbackList, setFeedbackList] = useState([]); // State for storing feedback data

  // Fetch feedback data from API
  const fetchFeedback = async () => {
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();

      if (response.ok) {
        setFeedbackList(data); // Update state with fetched feedback
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
      once: false,
    });
    fetchFeedback(); // Fetch feedback on component mount
  }, []);

  
  return (
    <div className="bg-gray-100 text-gray-700">
      <Head>
        <title>About Us - TechCanva</title>
        <meta name="description" content="Learn more about TechCanva, the web development services we offer, and how we help businesses grow online." />
      </Head>


      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-indigo-600 dark:bg-background dotted-background text-white">
        <h1 className="text-2xl md:text-4xl font-bold slide-in">About Our Web Services</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
          We are committed to delivering top-notch web solutions to help your business thrive online.
        </p>
      </section>

      {/* Our Mission Section */}
      {/* <section className=" dark:bg-gray-900 dark:text-white  px-6 py-20 text-center">
      <div className="w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          To empower businesses with scalable, secure, and user-friendly web applications that meet industry standards and exceed customer expectations.
        </p>
      </div>
      </section> */}

      {/* Services Section */}
     

      <div className=" dark:bg-background dotted-background  px-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-full flex flex-col-reverse lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center  p-4`}
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={service.img}
              className="object-contain w-full lg:w-3/4"
              width={500}
              height={500}
              alt="Service Image"
            />
          </div>
          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left mb-5 lg:mb-0">
            <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{service.text}</p>
          </div>
        </div>
      ))}
    </div>

     
      {/* Why Choose Us Section */}
      <section className="bg-indigo-600 dark:bg-gray-900 text-white py-16">
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
      {/* Technology Feild  */}
      <Technology />

      {/* Testimonials Section */}
      {/* <section className=" dark:bg-gray-900 px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold dark:text-gray-300">What Our Clients Say</h2>
        <Box mt={8}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[90%] sm:max-w-[40rem] md:max-w-[55rem] mx-auto overflow-hidden md:overflow-visible"
          >
            <CarouselContent>
              {feedbackList.map((feed, index) => (
                <CarouselItem key={index} className="sm:basis-3/4 md:basis-1/2 lg:basis-1/3 px-2">
                  <div className="p-4">
                    <Card className="w-full max-w-[300px] sm:max-w-[250px] h-[200px] mx-auto">
                      <CardContent className="flex flex-col h-full items-center justify-center p-4">
                        <span>{feed.feedback}</span>
                        <p className='text-right italic '>-{feed.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Box>
      </section> */}
  <WhatOurClientsSay/>


      {/* Call to Action Section */}
      <section className="bg-indigo-600 dark:bg-background dotted-background dark:text-gray-300 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Ready to Grow Your Business?</h2>
          <p className="mt-4 max-w-lg mx-auto text-lg">
            Contact us today to discuss how we can help bring your vision to life with tailored web solutions.
          </p>
          <Link href='/contact'>
          <button className="bg-indigo-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-indigo-600  mt-10 animate-bounce ">
            Get in Touch
          </button>
          </Link>
        </div>
      </section>


    </div>
  );
}

export default About;
