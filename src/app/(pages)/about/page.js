"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

import Image from 'next/image';
import WhatOurClientsSay from '@/app/_components/WhatOurClientsSay';
import { GridBackgroundDemo } from '@/app/_components/GridBackground';
import Heading from '@/app/_components/Heading';

import { DynamicList } from '@/app/_components/GlareCardDemo';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import Client from '@/app/_components/Client';
import OurProject from '@/app/_components/OurProject';


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

const seoServices = [
  "Strategic Optimization",
  "Targeted Keywords",
  "Content Creation",
  "Technical Expertise",
  "Continuous Monitoring",
  "Adaptability",
  "Increased Visibility",
  "Sustainable Growth",
];

const emailServices = [
  "Custom Email Domains",
  "Secure Communication",
  "Advanced Spam Filters",
  "24/7 Support",
  "Seamless Integration",
  "Scalable Solutions",
  "Enhanced Productivity",
  "Reliable Uptime",
];

const googleAdsServices = [
  "Targeted Campaigns",
  "ROI-Driven Strategies",
  "Ad Optimization",
  "Competitor Analysis",
  "Performance Tracking",
  "Audience Segmentation",
  "Budget Efficiency",
  "Enhanced Conversions",
]
const googleIndexing = [
  "Technical SEO Audits",
  "Content Optimization",
  "Backlink Building",
  "Mobile-First Strategies",
  "Structured Data Markup",
  "Performance Monitoring",
  "Improved CTR",
  "Sustainable Rankings",
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


  return (
    <div className="bg-gray-100 text-gray-700">
      <Head>
        <title>About Us - TechCanva</title>
        <meta name="description" content="Learn more about TechCanva, the web development services we offer, and how we help businesses grow online." />
      </Head>
{/* Header section of about page  */}
<GridBackgroundDemo />
     
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-indigo-600 dark:bg-background dotted-background text-white">
        <Heading word={'Our Web Services'} />
        <p className="mt-4 text-lg max-w-xl mx-auto slide-in" style={{ animationDelay: '0.2s' }}>
          We are committed to delivering top-notch web solutions to help your business thrive online.
        </p>
      </section>



      {/* Services Section */}


      <div className=" dark:bg-background dark:bg-grid-small-white/[0.2]  px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full flex flex-col-reverse lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center p-1 md:p-4`}
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
            <div className="w-full lg:w-1/2  text-justify lg:text-left mb-5 lg:mb-0">
              <h3 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500">{service.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{service.text}</p>
            </div>
          </div>
        ))}
      </div>



      {/* Key and features of services  */}


      <div className=" w-full dark:bg-background bg-white  dark:bg-grid-small-white/[0.2]  py-10  flex flex-col items-center  justify-center">
        <p className="text-4xl sm:text-6xl font-bold relative mt-5 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  text-center">
          Power Up Your Presence With
        </p>
      


        <div className='flex justify-start w-full flex-col px-4 md:px-16'>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left ">SEO Optimization Service</h3>
              <p>TechCanve's SEO services are tailored to elevate your website’s search engine rankings and online visibility. By blending smart keyword strategies, compelling content creation, and advanced technical optimizations, we help your business stand out in a competitive digital landscape.

                Focusing on sustainable results, our team continually refines strategies to ensure your site stays ahead of evolving trends. Whether your goal is to increase traffic, improve conversions, or build stronger brand recognition, TechCanve delivers SEO solutions that drive growth and success.</p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={seoServices} />

            </div>
          </div>

          <div className='mt-10 flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0'>
            <div className="w-full md:w-1/2 text-justify text-gray-400 mt-4">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">
                Professional Email Service
              </h3>
              <p>
                TechCanve's Professional Email Service provides secure, reliable, and customized email solutions tailored to your business needs. Our service ensures seamless communication, professional branding, and top-notch security features.
                With dedicated support and advanced tools, we help your organization enhance its email communication while staying protected against threats. Whether you're a startup or an enterprise, our email services are designed to boost your productivity and professionalism.
              </p>

            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={emailServices} />

            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mt-10">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Google Ads Service</h3>
              <p>TechCanve's Google Ads Service is designed to maximize your online reach and ROI. With data-driven strategies, targeted campaigns, and continuous optimization, we ensure your ads connect with the right audience at the right time.

                Whether you want to drive traffic, increase conversions, or enhance brand awareness, our Google Ads experts craft personalized campaigns to achieve measurable results. Let us help you dominate search engine results and outpace your competitors.</p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={googleAdsServices} />

            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mt-10">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Google Indexing and Ranking</h3>
              <p>At TechCanve, we specialize in Google Indexing and Ranking services to enhance your website's visibility and drive organic traffic. By ensuring your site meets Google's latest requirements, we help you achieve top positions in search results.


                Our strategies include technical audits, content alignment, and backlink building, designed to deliver long-lasting ranking improvements. Stay ahead of the competition and establish a strong online presence with our proven expertise.</p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={googleIndexing} />

            </div>
          </div>
        </div>
      </div>

 

      {/* What Our Client Say Component  */}
       <WhatOurClientsSay />
        <Client/>
        <OurProject/>

 {/* Call to Action Section */}
      <section className="bg-indigo-600 dark:bg-background relative dark:bg-grid-small-white/[0.2] dark:text-gray-300 text-white py-16">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>

  {/* Text container */}
  <div className="container mx-auto px-6 text-center relative z-20">
    <h2 className="text-xl font-semibold">Ready to Grow Your Business?</h2>
    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-1 py-3 relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Build amazing websites <br /> at <Cover>warp speed</Cover>
    </h1>
    <p className="my-4 max-w-lg mx-auto text-sm">
      Contact us today to discuss how we can help bring your vision to life with tailored web solutions.
    </p>
    <Link href="/contact">
      <Button
        borderRadius="2rem"
        className="bg-indigo-200 dark:bg-transparent font-light text-black dark:text-white border-neutral-200 dark:border-slate-800">
        Get in Touch
      </Button>
    </Link>
  </div>
</section>

   

    </div>
  );
}

export default About;
