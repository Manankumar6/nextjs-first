"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { Eye, Users, Handshake, Award,Globe, Monitor, Instagram, Facebook, } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="relative flex flex-col bg-muted dark:bg-transparent  items-center justify-center h-auto pb-12 ">
      {/* SparklesCore Background */}
      {/* <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles-why-choose-us"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-10 pb-12 ">
        <h1 className="text-4xl md:text-6xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600 py-4">
          Why Choose Us?
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-8">
          The road to success starts here.
        </p>

        {/* Features Section */}


        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "We Understand Your Vision",
              description:
                "We know that every business is unique, with its own set of challenges. That’s why we take the time to fully understand your goals and needs, ensuring that our solutions are perfectly aligned with your vision and objectives.",
              icon: <Eye className="w-8 h-8 text-blue-500" />,
            },
            {
              title: "Your Success Is Our Priority",
              description:
                "Consider us an extension of your team. We take full ownership of your challenges, collaborating closely with you to deliver meaningful results that drive success and bring lasting value to your business.",
              icon: <Users className="w-8 h-8 text-green-500" />,
            },
            {
              title: "Long-Term Partnerships",
              description:
                "We believe trust is the foundation of any successful relationship. Our process is completely transparent, ensuring you have a clear understanding of every step of your project and the results we deliver, fostering a lasting partnership built on honesty.",
              icon: <Handshake className="w-8 h-8 text-purple-500" />,
            },
            {
              title: "Commitment to Excellence",
              description:
                "Quality is the cornerstone of everything we do. Driven by a passion for innovation and a commitment to exceeding expectations, we ensure that every project is executed with precision and delivers outstanding results.",
              icon: <Award className="w-8 h-8 text-yellow-500" />,
            },
            {
              title: "Web Design",
              description:
                "We create visually stunning, user-friendly web designs that align with your brand’s identity and goals. From initial wireframes to final prototypes, we focus on delivering seamless user experiences that engage visitors and drive conversions.",
              icon: <Monitor className="w-8 h-8 text-blue-500" />,
            },
            {
              title: "Web Development",
              description:
                "We specialize in developing secure, scalable, and high-performing websites tailored to your business needs. By leveraging the latest technologies, we build responsive and dynamic platforms that drive growth and enhance your online presence.",
              icon: <Globe className="w-8 h-8 text-green-500" />,
            },
            {
              title: "Instagram Ads",
              description:
                "Enhance your brand’s visibility and grow your audience with powerful Instagram ads. We design visually appealing campaigns and optimize targeting to ensure maximum ROI, driving meaningful engagement and growth for your business.",
              icon: <Instagram className="w-8 h-8 text-pink-500" />,
            },
            {
              title: "Facebook Ads",
              description:
                "Expand your reach and engage with targeted audiences through effective Facebook ad strategies. Using advanced analytics and creative ad designs, we increase your visibility and drive higher conversions for your business.",
              icon: <Facebook className="w-8 h-8 text-yellow-500" />,
            },
            {
              title: "SEO Optimization",
              description:
                "Boost your search rankings with customized SEO strategies. From thorough keyword research to effective on-page optimization, we focus on increasing your visibility and driving organic traffic growth to help your business succeed online.",
              icon: <Award className="w-8 h-8 text-purple-500" />,
            },
            {
              title: "Brand Vision",
              description:
                "We take the time to understand and align with your brand’s unique vision to deliver exceptional results. Our focus is on creating a cohesive brand identity that resonates with your audience and leaves a lasting, positive impression.",
              icon: <Eye className="w-8 h-8 text-indigo-500" />,
            },
           
           
            
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default WhyChooseUs;
