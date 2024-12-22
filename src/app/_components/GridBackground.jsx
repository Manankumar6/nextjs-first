
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export function GridBackgroundDemo() {

  return (
    <div className="min-h-[40rem] w-full dark:bg-background bg-white  dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <p className="pt-10 z-20 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 tracking-wide py-4 ">
        Technology We Use
      </p>



      <div className="flex flex-wrap justify-center mt-12 w-full px-4 gap-8 py-4">
        {/* Next.js Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
          <p className="text-4xl md:text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-500 py-4">

            <TextGenerateEffect words={'Next.js'} />
          </p>
          <div className="w-full max-w-md h-auto relative mx-auto">
            {/* Gradients */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-3/4" />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
            <p className="pt-10 text-gray-700 dark:text-neutral-200 text-justify">     Next.js empowers your website with unmatched speed, scalability, and SEO performance. By combining server-side rendering and static site generation, it ensures fast loading times and better visibility on search engines. It's the perfect choice for businesses looking to create dynamic, high-performing websites that drive user engagement and conversions.</p>

          </div>



        </div>

        {/* React.js Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
          <p className="text-4xl md:text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4">

            <TextGenerateEffect words={'React.js'} />
          </p>
          <div className="w-full max-w-md h-auto relative mx-auto ">
            {/* Gradients */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 top-0  transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />
            <p className="pt-10 text-gray-700 dark:text-neutral-200 text-justify">React.js provides the foundation for creating modern, interactive, and user-friendly interfaces. With its reusable components and efficient state management, it ensures a seamless experience for your users while making development faster and more cost-effective. React.js is ideal for businesses seeking scalable and future-proof solutions.</p>
          </div>
        </div>
      </div>


    </div>
  );
}
