"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Image from 'next/image';
import WhatOurClientsSay from '@/app/_components/WhatOurClientsSay';
import { DynamicList } from '@/app/_components/GlareCardDemo';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import Client from '@/app/_components/Client';
import OurProject from '@/app/_components/OurProject';
import { ChevronDown, ChevronUp, CircleCheckIcon } from 'lucide-react';

import MovingCircle from '@/components/MovingCircle';
import ImageGallery from '@/app/_components/ImageGallery';


const services = [
  {
    title: "What is Custom Web Development?",
    text: `Custom web development refers to the process of creating tailored websites and web applications to meet the unique needs of your business. Unlike generic website templates, custom web development gives you full control over design, functionality, and user experience, ensuring that your site stands out and performs optimally.`,
    img: "/image/customweb.jpg",
  },
  {
    title: "What is UI/UX Design?",
    text: `UI/UX design is the process of enhancing user satisfaction by improving the usability, accessibility, and interaction of a website or web application. It focuses on creating intuitive and visually appealing interfaces (UI) while ensuring a smooth and seamless user experience (UX). By prioritizing user needs, we ensure that each design element engages users effectively.`,
    img: "/image/ui.jpg",
  },
  {
    title: "What is Performance Optimization?",
    text: `Performance optimization is the process of improving the speed, responsiveness, and overall performance of your website. This includes reducing load times, optimizing images and assets, improving server response time, and enhancing the overall user experience. By focusing on performance, we ensure that your site provides a smooth experience for visitors, boosts SEO rankings, and maximizes user satisfaction.`,
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
  const [showAll, setShowAll] = useState(false);

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


  const webdev = [
    {
      heading: "Startup Business Website",
      lists: [
        "5 pages Website",
        "1 Year Free Domain",
        "1 Year Free Hosting",
        "Free SSL Certificates",
        "Social Media Integration",
        "Inquiry Form",
        "Technical Support"
      ]
    },
    {
      heading: "E-Commerce Website",
      lists: [
        "Dynamic Website",
        "Admin Access",
        "100% Responsive Website",
        "Social Media Integration",
        "1 Year Free Domain",
        "1 Year Free Hosting",
        "Free SSL Certificates"
      ]
    },
    {
      heading: "Custom Website",
      lists: [
        "Multi Page Website",
        "Dynamic Website",
        "Admin Access",
        "100% Responsive Website",
        "Social Media Integration",
        "1 Year Free Domain",
        "1 Year Free Hosting",
        "Free SSL Certificates",
        "Facebook & Instagram Ads"
      ]
    },
    {
      heading: "Portfolio Website",
      lists: [
        "Personalized Design",
        "One Page Website",
        "Fast Loading Speed",
        "Responsive Layout",
        "Social Media Integration",
        "Free SSL Certificates",
        "1 Year Free Hosting",
        "Contact Form"
      ]
    },
    {
      heading: "Educational Website",
      lists: [
        "Dynamic Course Pages",
        "Student Login",
        "Admin Panel",
        "Video Integration",
        "100% Responsive Design",
        "1 Year Free Domain",
        "1 Year Free Hosting",
        "Free SSL Certificates"
      ]
    },
    {
      heading: "Blog Website",
      lists: [
        "Customizable Design",
        "SEO-Ready Structure",
        "Social Sharing Features",
        "100% Responsive Layout",
        "1 Year Free Domain",
        "1 Year Free Hosting",
        "Free SSL Certificates",
        "Content Management System"
      ]
    }
  ];

  const digitalMarketing = [
    {
      heading: "Facebook & Instagram Ads",
      para: "Leverage the power of social media to boost brand awareness, generate leads, and drive sales with highly targeted campaigns on Facebook and Instagram. Our strategy ensures your ads reach the right audience at the right time."
    },
    {
      heading: "Google Ads",
      para: "Maximize your online visibility and ROI with Google Ads. Our PPC experts create and optimize search, display, and shopping campaigns to put your business in front of customers actively searching for your services."
    },
    {
      heading: "Search Engine Optimization",
      para: "Enhance your website's organic rankings with our comprehensive SEO services. From keyword research to on-page and off-page optimization, we ensure your business stays ahead of the competition in search engine results."
    },
    {
      heading: "Content Marketing",
      para: "Engage your audience with high-quality, compelling content that builds trust and drives conversions. From blog posts to infographics, we create content that resonates with your audience."
    },
    {
      heading: "Email Marketing",
      para: "Stay connected with your audience through personalized and impactful email campaigns. We design and manage campaigns that drive engagement, nurture leads, and boost customer retention."
    },

  ];

  const wordpressServices = [
    {
      heading: "Custom WordPress Development",
      para: "Get a fully customized WordPress website tailored to your business needs. Our team builds responsive, fast, and scalable websites with unique designs and functionality."
    },
    {
      heading: "WordPress Theme Customization",
      para: "Transform your chosen theme into a unique design that aligns perfectly with your brand identity. We ensure your website stands out and delivers a seamless user experience."
    },
    {
      heading: "WooCommerce Integration",
      para: "Turn your WordPress site into a powerful e-commerce platform with WooCommerce. We set up, configure, and optimize your online store for maximum sales and performance."
    },
    {
      heading: "WordPress Maintenance & Support",
      para: "Keep your website secure and up-to-date with our ongoing WordPress maintenance services. We handle updates, backups, performance optimization, and more."
    },
    {
      heading: "WordPress SEO Optimization",
      para: "Boost your website's organic traffic with our WordPress-specific SEO services. From optimizing content to technical SEO fixes, we help improve your search rankings."
    },
    {
      heading: "Plugin Development & Customization",
      para: "Extend your website’s functionality with custom WordPress plugins. Whether you need a plugin built from scratch or modifications to existing ones, we've got you covered."
    }
  ];


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    fetchFeedback(); // Fetch feedback on component mount
  }, []);


  return (
    <div className="bg-gray-100 mt-24 text-gray-700">

      <Head>
        <title>Our Services - TechCanva</title>
        <meta name="description" content="Learn more about TechCanva, the web development services we offer, and how we help businesses grow online." />
      </Head>


      {/* Hero Section */}
      <section className="text-center relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
        <div className="relative z-30"> {/* Added relative and z-index */}
          <MovingCircle count={8} />

          <h1 className='text-3xl md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in'>Empowering Your Digital Success</h1>
          <p
            className="mt-4 text-lg max-w-xl mx-auto slide-in animate-move"
            style={{ animationDelay: '0.2s' }}
          >
            Custom Websites, Web Apps, and E-commerce Solutions — Tailored to Your Needs.
          </p>

        </div>

        {/* Background Shape */}
        <div className="w-1/2 h-[31rem] rounded-full min-h-full bg-slate-700 absolute  md:-right-20 -right-20 -top-16   md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in  "

        ></div>
      </section>


      <div className='bg-background text-gray-100'>

        <div className="w-full pt-5  z-20 relative overflow-hidden">
          <div
            className="md:ml-12 p-6 md:p-8 text-lg md:text-xl font-extrabold bg-gray-800 w-[30rem] md:w-[35rem] "
            style={{
              clipPath: "polygon(0 0, 62% 0, 80% 100%, 0% 100%)",
            }}
          >
            <p className=" bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-100 dark:to-blue-600">Web Design & Web Development</p>
          </div>

          <div className="absolute  bottom-0 left-0 md:left-12 w-full md:w-[94%] h-[2px] bg-blue-500"></div>

        </div>

        <div className="flex flex-wrap gap-4 w-full justify-around">
          {webdev.slice(0, showAll ? webdev.length : 3).map((service, ind) => (
            <div
              key={ind}
              className="bg-white dark:bg-slate-900 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-left
                  sm:basis-1/2 md:basis-1/3 lg:basis-1/4  min-w-[20rem]"
            >
              <h3 className="text-xl mb-2 text-blue-400">{service.heading}</h3>
              {service.lists.map((list, listInd) => (
                <div
                  key={listInd}
                  className="flex my-1 items-center justify-start w-full"
                >
                  <CircleCheckIcon className="fill-blue-700 size-5 mr-2" />
                  {list}
                </div>
              ))}
            </div>
          ))}

        </div>
        {webdev.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-800 font-extralight text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition"
            >

              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}

        <div className="w-full my-5 z-20 relative overflow-hidden">

          <div
            className="md:ml-12 p-6 md:p-8 text-lg md:text-xl font-extrabold bg-gray-800 w-[30rem] md:w-[35rem] "
            style={{
              clipPath: "polygon(0 0, 62% 0, 80% 100%, 0% 100%)",
            }}
          >

            <p className="  bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-100 dark:to-blue-600"> Digital Marketing Services</p>
          </div>

          <div className="absolute  bottom-0 left-0 md:left-12 w-full md:w-[94%] h-[2px] bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap gap-4 w-full justify-evenly px-10">
          {digitalMarketing.slice(0, showAll ? digitalMarketing.length : 3).map((service, ind) => (
            <div
              key={ind}
              className="bg-white dark:bg-slate-900 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-left 
                  sm:basis-1/2 md:basis-1/3 lg:basis-1/4  "
            >
              <h3 className="text-xl mb-2 text-blue-400">{service.heading}</h3>
              <p className="text-balance">{service.para}</p>
            </div>
          ))}
        </div>
        {digitalMarketing.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-800 font-extralight text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition"
            >

              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}

        <div className="w-full my-5 z-20 relative overflow-hidden">
          <div
            className="md:ml-12 p-6 md:p-8 text-lg md:text-xl font-extrabold bg-gray-800 w-[30rem] md:w-[35rem] "
            style={{
              clipPath: "polygon(0 0, 62% 0, 80% 100%, 0% 100%)",
            }}
          >

            <p className=" bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-100 dark:to-blue-600">  WordPress Services</p>
          </div>

          <div className="absolute  bottom-0 left-0 md:left-12 w-full md:w-[94%] h-[2px] bg-blue-500"></div>
        </div>

        <div className="flex flex-wrap gap-6 w-full px-10 justify-around">
          {wordpressServices.slice(0, showAll ? wordpressServices.length : 3).map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-balance 
                  sm:basis-1/2 md:basis-1/3 lg:basis-1/4  "
            >
              <h3 className="text-xl  mb-2 text-blue-400">{service.heading}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.para}</p>
            </div>
          ))}
        </div>
        {wordpressServices.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-800 font-extralight text-white px-4 py-2 mb-2 rounded-md shadow-md hover:bg-gray-900 transition"
            >

              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}

      </div>

  {/* What Our Client Say Component  */}
      <OurProject />
      <Client />
      <WhatOurClientsSay />
      <ImageGallery />

      {/* Services Section */}
      <div className=" dark:bg-background  dark:bg-grid-small-white/[0.2]  px-4">
        <div className="w-full px-2 md:px-10 text-3xl sm:text-6xl font-bold relative  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  text-left">
          Key Concepts
          <div className="w-full border-b-2 my-2 relative border-blue-300">
            <div className="w-[15px] h-[15px] absolute -top-1.5 right-0 bg-blue-300"></div>
          </div>
        </div>
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full flex flex-col-reverse z-10 lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center p-1 md:p-4`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={service.img}
                className="object-contain w-full lg:w-3/4"
                width={500}
                height={500}
                alt={index}
              />
            </div>
            {/* Content Section */}
            <div className="w-full lg:w-1/2  text-justify lg:text-left mb-5 lg:mb-0">
              <h3 className="text-3xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500">{service.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{service.text}</p>
            </div>
          </div>
        ))}
      </div>



      {/* Key and features of services  */}


      <div className=" w-full dark:bg-background bg-white  dark:bg-grid-small-white/[0.2]  py-10  flex flex-col items-center  justify-center">
        <div className="w-full px-2 md:px-10 text-3xl sm:text-6xl font-bold relative mt-5 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  text-left">
          Power Up Your Presence
          <div className="w-full border-b-2 my-2 relative border-blue-300">
            <div className="w-[15px] h-[15px] absolute -top-1.5 right-0 bg-blue-300"></div>
          </div>
        </div>


        <div className='flex justify-start w-full flex-col px-4 md:px-16'>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left ">SEO Optimization Service</h3>
              <p>
                At <strong>TechCanva</strong>, we provide customized SEO services designed to enhance your website's search engine rankings and online visibility. Our approach combines targeted keyword strategies, engaging content creation, and advanced technical optimizations to ensure your business stands out in the competitive digital landscape.

                We focus on delivering sustainable results by continuously refining our strategies to keep your site ahead of the latest trends. Whether you're looking to increase traffic, boost conversions, or improve brand recognition, <strong>TechCanva</strong> delivers SEO solutions that drive growth and long-term success.
              </p>
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
                <strong>TechCanve's Professional Email Service</strong> offers secure, reliable, and customizable email solutions designed to meet the unique needs of your business. Our service ensures seamless communication, enhances professional branding, and provides robust security features to protect your business.

                With expert support and advanced tools, we help you improve email communication while safeguarding your organization from potential threats. Whether you're a growing startup or an established enterprise, our email services are designed to enhance productivity and elevate your brand's professionalism.
              </p>

            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={emailServices} />

            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mt-10">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Google Ads Service</h3>
              <p>
                <strong>TechCanve's Google Ads Service</strong> is designed to help you maximize online visibility and boost your ROI. Using data-driven strategies, we create targeted campaigns and continuously optimize your ads to ensure they reach the right audience at the perfect time.

                Whether your goal is to drive traffic, increase conversions, or boost brand awareness, our Google Ads experts craft personalized campaigns tailored to deliver measurable results. Let us assist you in dominating search engine results and staying ahead of your competitors.
              </p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={googleAdsServices} />

            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mt-10">
            <div className="w-full md:w-1/2 text-justify text-gray-400">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Google Indexing and Ranking</h3>
              <p>
                At <strong>TechCanve</strong>, we specialize in Google Indexing and Ranking services designed to enhance your website's visibility and drive organic traffic. By ensuring your site aligns with the latest Google guidelines, we help you achieve higher positions in search engine results.

                Our comprehensive strategies include technical audits, content optimization, and effective backlink building to deliver sustainable ranking improvements. Stay ahead of the competition and build a strong online presence with our proven expertise in SEO.
              </p>
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <DynamicList list={googleIndexing} />

            </div>
          </div>
        </div>
      </div>



    
      {/* <GridBackgroundDemo /> */}

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
