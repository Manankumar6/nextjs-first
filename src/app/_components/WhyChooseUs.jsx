"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { Eye, Users, Handshake, Award } from "lucide-react";
const WhyChooseUs = () => {
  return (
    <div className="relative flex flex-col bg-muted dark:bg-transparent  items-center justify-center h-auto pb-12 ">
      {/* SparklesCore Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles-why-choose-us"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div>

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
                "Every business is unique, and so are its challenges. We start by understanding your specific goals and requirements, ensuring that our solutions align perfectly with your vision and objectives.",
              icon: <Eye className="w-8 h-8 text-blue-500" />,
            },
            {
              title: "Your Success Is Our Priority",
              description:
                "Think of us as an extension of your team. We take ownership of your challenges, working side-by-side to deliver results that drive success and add value to your business.",
              icon: <Users className="w-8 h-8 text-green-500" />,
            },
            {
              title: "Long-Term Partnerships",
              description:
                "We believe trust is built on honesty. Our process is fully transparent—you’ll always have a clear understanding of every aspect of your project and the results we deliver.",
              icon: <Handshake className="w-8 h-8 text-purple-500" />,
            },
            {
              title: "Commitment to Excellence",
              description:
                "Quality is at the heart of everything we do. With a passion for innovation and a commitment to exceeding expectations, we ensure every project is executed to perfection.",
              icon: <Award className="w-8 h-8 text-yellow-500" />,
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
