"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Box,
  Button,

} from '@chakra-ui/react';
import Head from 'next/head';
import Technology from '@/app/_components/Technology';





const About = () => {
  const [feedbackList, setFeedbackList] = useState([]); // State for storing feedback data
  console.log(feedbackList)
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

  // Slider settings
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4, // Show 3 slides at once
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,

  //   responsive: [
  //     {
  //       breakpoint: 1024, // Adjust for medium screens
  //       settings: {
  //         slidesToShow: 2, // Show 2 slides at once on medium screens
  //       },
  //     },
  //     {
  //       breakpoint: 768, // Adjust for smaller screens
  //       settings: {
  //         slidesToShow: 2, // Show 1 slide at a time on mobile
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="bg-gray-100 text-gray-700">
      <Head>
        <title>About Us - TechCanva</title>
        <meta name="description" content="Learn more about TechCanva, the web development services we offer, and how we help businesses grow online." />
      </Head>


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
      <section className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay={100}>
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
      {/* Technology Feild  */}
      <Technology />

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-12 text-center">
  <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
  <Box mt={8}>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[90%] sm:max-w-[40rem] md:max-w-[55rem] mx-auto"
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
</section>



      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Ready to Grow Your Business?</h2>
          <p className="mt-4 max-w-lg mx-auto text-lg">
            Contact us today to discuss how we can help bring your vision to life with tailored web solutions.
          </p>
          <Link href='/contact'>
            <Button mt={6} px={6} py={3} colorScheme="whiteAlpha" variant="outline">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>


    </div>
  );
}

export default About;
