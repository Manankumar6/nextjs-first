"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
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


  Text,

} from '@chakra-ui/react';
import Head from 'next/head';


const projectData = [
  {
    img: "/image/ecom2.png",
    title: "EShop | E-commerce Site",
    desr: "  Discover a seamless shopping experience with EShop, where quality meets convenience. Explore a curated selection of products across categories, tailored to meet all your needs with style and ease.",
    link: "https://ecom-gamma-five.vercel.app/"
  },
  {
    img: "/image/tech.png",
    title: "TechTutor Online | Student Survey Portal",
    desr: "Explore TechTutor Online's Student Survey Portal, a comprehensive platform designed to gather feedback, insights, and experiences from students. Tailored for educational institutions, this portal helps educators understand student needs, track progress, and enhance learning outcomes through structured surveys and analytics.",
    link: "https://techtutoronline.vercel.app"
  },
  {
    img: "/image/music.png",
    title: "Sound Wavy Studio",
    desr: "Immerse yourself in a vibrant audio experience at Sound Wavy Studio. A hub for music creators to record, edit, and share their soundwaves with the world, providing tools to elevate your audio creations.",
    link: "https://sound-wave-studio.vercel.app/"
  },
  {
    img: "/image/chat.png",
    title: "LinkUp | Web Chat App",
    desr: "Connect and converse seamlessly with LinkUp, a dynamic chat platform designed for real-time communication and collaboration. Perfect for both personal and professional conversations, LinkUp makes staying in touch easier than ever.",
    link: "https://mern-chat-app-three-ruby.vercel.app"
  },

]


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

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides at once on medium screens
        },
      },
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile
        },
      },
    ],
  };

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

     




      {/* Our Project Preview Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <div className="flex lg:flex-row flex-col">

          <div className='lg:w-1/2'>

            <h2 className="text-3xl font-semibold">Our Projects</h2>
            <p className="mt-4 max-w-lg mx-auto text-left text-lg mb-4 text-gray-600">
              At our company, we take pride in delivering innovative solutions across a range of industries, transforming visions into
              powerful digital experiences. With a portfolio that spans fields including e-commerce, healthcare, education, finance,
              and entertainment, we’re committed to crafting customized solutions that address specific challenges and unlock new opportunities.
              <br /><br />
              In each of these fields, we bring a deep understanding of industry-specific needs and a meticulous approach to design and
              functionality. Our e-commerce solutions enable seamless shopping experiences, while our healthcare and finance applications
              provide secure, user-centered platforms for critical services. Our educational platforms foster engagement and accessibility,
              and our entertainment solutions bring intuitive and engaging experiences to users worldwide.
              <br /><br />



            </p>

          </div>
          <Carousel className="w-full max-w-lg mx-auto my-auto">
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square  items-center p-4 flex-col ">
                        <img src={project.img} />
                        <p className="text-2xl font-semibold mt-5">{project.title}</p>
                        <p className='text-sm'>{project.desr}</p>
                        <div className="mt-10">
                          <Link
                            href="/contact"
                            className="inline-block px-8 py-4 border border-indigo-500 text-indigo-500 rounded-lg font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out"
                          >
                            View Live
                          </Link>

                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

      </section>
       {/* Testimonials Section */}
       <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <Box mt={8}>
          {feedbackList.length > 0 ? (
            <Slider {...sliderSettings}>
              {feedbackList.map((feedback, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth={1}
                  borderColor="gray.300"
                  borderRadius="md"
                  bg="white"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="250px" // Set a fixed height to keep all cards the same height
                  m={2} // Margin between cards
                >
                  <Text fontSize="lg" overflowWrap="break-word" textAlign="left" flexGrow={1}>
                    "{feedback.feedback}"
                  </Text>
                  <Text mt={2} fontWeight="bold" textAlign="right">
                    - {feedback.name}
                  </Text>
                </Box>
              ))}
            </Slider>
          ) : (
            <Text>No feedback available yet.</Text>
          )}
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
