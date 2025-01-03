'use client'

import MovingCircle from '@/components/MovingCircle'
import { Button } from '@/components/ui/moving-border';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

// Define your sections and fields as an array of objects
const serviceSections = [
  {
    title: "Web Design Services - Create a Stunning First Impression",
    description:
      "Our web design services focus on making your site visually appealing, easy to use, and optimized for conversions. Here’s what you get:",
    listItems: [
      {
        title: "Mobile-Responsive Design",
        description: "Your site will look perfect on any device."
      },
      {
        title: "User-Friendly Navigation",
        description: "Simple layouts ensure smooth browsing."
      },
      {
        title: "SEO-Optimized Structure",
        description: "Rank higher on search engines and attract more traffic."
      },
    ],
    features: [
      "Custom Designs to Reflect Your Brand",
      "High-Converting Landing Pages",
      "E-Commerce and Portfolio Websites",
      "Content Management System (CMS) Integration for Easy Updates",
    ],
    imageSrc: "/image/webmockup.png",
  },
  // Add more sections as needed
  {
    title: "Web Development Services - Build Powerful Websites",
    description: "We develop websites that are fast, secure, and scalable, ensuring long-term growth. Our services include:",
    listItems: [
      {
        title: "Front-End Development",
        description: "Our front-end developers create dynamic and responsive user interfaces that engage your visitors and provide seamless navigation across all devices. We use modern frameworks like React and Angular to ensure speed and interactivity."
      },
      {
        title: "Back-End Development",
        description: "We deliver reliable back-end solutions that ensure your website’s core functionality is stable and secure. Using technologies such as Node.js, Express.js, and MongoDB, we build fast, scalable, and secure server-side applications."
      },
      {
        title: "E-Commerce Development",
        description: "We specialize in creating user-friendly e-commerce platforms with smooth product browsing, easy checkout processes, and secure payment gateways. We use platforms like Shopify, Magento, and WooCommerce to bring your online store to life."
      },
    ],
    
    imageSrc: "/image/webdevmockup.png",
  },
  {
    title: "Digital Marketing Services - Boost Your Online Visibility",
    description: "With our digital marketing services, we help you reach the right audience, grow your online presence, and achieve your business goals. Our data-driven strategies ensure that your marketing efforts deliver measurable results.",
    listItems: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "We optimize your website content to ensure it’s search engine-friendly, improving your rankings on Google and other search engines."
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "We create targeted campaigns on platforms like Facebook, Instagram, Twitter, and LinkedIn to boost engagement, increase brand awareness, and drive traffic."
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description: "Get immediate visibility and drive traffic to your website with effective PPC campaigns. We manage your ad budgets, optimize campaigns for ROI, and ensure your ads reach the right audience."
      },
    ],
    
    imageSrc: "/image/digitalmarketing.png",
  },
  {
    title: "Content Management Systems (CMS) - Simplify Your Website Management",
    description: "Our CMS solutions empower businesses to manage their website content easily without needing technical knowledge. Whether you're updating blog posts, adding images, or changing text, our CMS services make website management simple and efficient.",
    listItems: [
      {
        title: "User-Friendly Dashboard",
        description: "Our intuitive dashboards allow you to make changes and updates to your website without technical expertise. Manage text, images, and multimedia with ease."
      },
      {
        title: "Custom Plugins and Extensions",
        description: "Add specific functionality to your site using tailored plugins and extensions. From e-commerce features to SEO optimization, we ensure your CMS meets your business needs."
      },
      {
        title: "Scalability",
        description: "Our CMS solutions are designed to grow with your business. Whether you're adding new pages, increasing traffic, or expanding your product offerings, we ensure your site can scale."
      },
    ],

    imageSrc: "/image/cmsmockup.png",
  },
];

const Page = () => {
  return (
    <section className="mt-24 w-full min-h-48 bg-background text-white">
      <section className="text-center relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
        <div className="relative z-30">
          <MovingCircle count={8} />
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">
            Transform Your Vision into Reality
          </h1>
          <p
            className="mt-4 text-lg max-w-3xl text-center mx-auto slide-in animate-move"
            style={{ animationDelay: '0.2s' }}
          >
            In today's digital world, a strong online presence is essential. Whether you need a professional website, an advanced e-commerce platform, or strategic digital marketing, we make it happen seamlessly.
          </p>
        </div>

        {/* Background Shape */}
        <div className="w-1/2 h-[31rem] rounded-full min-h-full bg-slate-700 absolute md:-right-20 -right-20 -top-16 md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in"></div>
      </section>

      {/* Map through serviceSections to dynamically generate each section */}
      {serviceSections.map((section, index) => (
        <section key={index} className={`w-full flex flex-col md:flex-row justify-center items-center p-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        
          <div className="w-full lg:w-1/2 text-left mb-4 md:mb-0 px-5 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in mb-4">
              {section.title}
            </h1>
            <p className="text-base leading-relaxed mb-4">{section.description}</p>
            <ul className="list-disc text-lg">
              {section.listItems.map((item, idx) => (
                <li key={idx} className='my-1'>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {section.features && <>
              <h1 className="my-5 text-xl font-bold">Features You’ll Enjoy:</h1>
              <ul className="list-disc text-lg">
                {section.features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
            }
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-full">
              <Image
                src={section.imageSrc}
                width={900}
                height={900}
                alt={section.title}
                className="rounded-lg shadow-lg w-full object-contain"
              />
            </div>
          </div>
        </section>
      ))}


      <section>

      <div className="text-2xl  bg-transparent relative  md:text-4xl py-5 lg:text-7xl font-bold text-center text-black tracking-tight">
     

     <p className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600">
     Ready to Boost Your Business? 
     </p>
     <p className="mt-4 w-full md:w-1/2 px-5 mx-auto text-sm font-light tracking-wide  md:text-center text-gray-700 dark:text-gray-300 mb-5">
     Let’s Build Something Amazing Together!
     </p>
     <Link href={"/contact"}>
       <Button
         borderRadius="2rem"
         className="bg-indigo-200 dark:bg-transparent font-lighter text-black dark:text-white border-neutral-200 dark:border-slate-800 "
       >
         <p className="animate-pulse">Get &nbsp; In &nbsp; Touch</p>
       </Button>
     </Link>
   </div>
      </section>

    </section>
  );
};

export default Page;
