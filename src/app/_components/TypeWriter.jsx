"use client";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { Eye, Users, Handshake, Award, Globe, Monitor, Instagram, Facebook, CheckIcon, CircleCheckIcon } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },

    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "TechCanva.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


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



  return (
    (<div className="flex relative  flex-col items-center justify-center py-16  ">
      <div className="w-full absolute inset-0 h-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-lg text-justify text-gray-600 dark:text-gray-400 px-5">
        Transforming your ideas into impactful digital solutions with expert web design, development, and marketing strategies.
      </p>

      <div className="w-full my-5 z-20 relative overflow-hidden">
        <div
          className="md:ml-12 p-6 md:p-8 text-lg md:text-xl font-extrabold bg-gray-800 w-[30rem] md:w-[35rem] "
          style={{
            clipPath: "polygon(0 0, 62% 0, 80% 100%, 0% 100%)",
          }}
        >
          <p className=" bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-100 dark:to-blue-600">Web Design & Web Development</p>
        </div>
        {/* Full-width bottom line */}
        <div className="absolute  bottom-0 left-0 md:left-12 w-full md:w-[94%] h-[2px] bg-blue-500"></div>
      </div>

      <div className="flex flex-wrap gap-4 w-full justify-around">
        {webdev.map((service, ind) => (
          <div
            key={ind}
           className="bg-white dark:bg-gray-800 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-left
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


      <div className="w-full my-5 z-20 relative overflow-hidden">
        <div
          className="md:ml-12 p-6 md:p-8 text-lg md:text-xl font-extrabold bg-gray-800 w-[30rem] md:w-[35rem] "
          style={{
            clipPath: "polygon(0 0, 62% 0, 80% 100%, 0% 100%)",
          }}
        >

          <p className="  bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-100 dark:to-blue-600"> Digital Marketing Services</p>
        </div>
        {/* Full-width bottom line */}
        <div className="absolute  bottom-0 left-0 md:left-12 w-full md:w-[94%] h-[2px] bg-blue-500"></div>
      </div>
      <div className="flex flex-wrap gap-4 w-full justify-evenly px-10">
        {digitalMarketing.map((service, ind) => (
          <div
            key={ind}
            className="bg-white dark:bg-gray-800 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-left 
                  sm:basis-1/2 md:basis-1/3 lg:basis-1/4  "
          >
            <h3 className="text-xl mb-2 text-blue-400">{service.heading}</h3>
            <p className="text-balance">{service.para}</p>
          </div>
        ))}
      </div>

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
        {wordpressServices.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-start text-balance 
                  sm:basis-1/2 md:basis-1/3 lg:basis-1/4  " 
          >
            <h3 className="text-xl font-bold mb-2 text-blue-400">{service.heading}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.para}</p>
          </div>
        ))}
      </div>


      {/* <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4  px-10">
        {[
          {
            title: "Web Design",
            description:
              "Craft stunning, user-friendly designs tailored to your brand’s identity and goals.",
            icon: <Monitor className="w-8 h-8 text-blue-500" />,
          },
          {
            title: "Web Development",
            description:
              "Develop secure, scalable, and high-performing websites for your business needs.",
            icon: <Globe className="w-8 h-8 text-green-500" />,
          },
          {
            title: "Instagram Ads",
            description:
              "Boost engagement and grow your audience with impactful Instagram campaigns.",
            icon: <Instagram className="w-8 h-8 text-pink-500" />,
          },
          {
            title: "Facebook Ads",
            description:
              "Reach targeted audiences with innovative ad strategies on Facebook.",
            icon: <Facebook className="w-8 h-8 text-yellow-500" />,
          },
          {
            title: "SEO Optimization",
            description:
              "Improve your search rankings with tailored SEO strategies.",
            icon: <Award className="w-8 h-8 text-purple-500" />,
          },
          {
            title: "Brand Vision",
            description:
              "Understand and align with your brand’s vision to deliver exceptional results.",
            icon: <Eye className="w-8 h-8 text-indigo-500" />,
          },
          {
            title: "Client Collaboration",
            description:
              "Build long-term partnerships through seamless collaboration and trust.",
            icon: <Handshake className="w-8 h-8 text-teal-500" />,
          },
          {
            title: "Commitment to Excellence",
            description:
              "Deliver high-quality, innovative solutions to meet and exceed client expectations.",
            icon: <Users className="w-8 h-8 text-orange-500" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 z-10 rounded-lg p-6 my-5 shadow-md hover:shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-pretty">
              {item.description}
            </p>
          </div>
        ))}
      </div> */}
      
    </div>
    )
  );
}
