import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

const ExploreService = () => {
  return (
    <div className="text-2xl  bg-transparent relative  md:text-4xl py-5 lg:text-7xl font-bold text-center text-black tracking-tight">
     

      <p className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600">
        Explore Our Services
      </p>
      <p className="mt-4 w-full md:w-1/2 px-5 mx-auto text-sm font-light tracking-wide text-justify md:text-center text-gray-700 dark:text-gray-300 mb-10">
      We offer a wide range of services designed to make your experience smoother and more efficient. Whether you're looking for creative solutions or need help with something specific, our team is here for you. Take a look at what we can do and let us help you reach your goals.
      </p>
      <Link href={"/about"}>
        <Button
          borderRadius="2rem"
          className="bg-indigo-200 dark:bg-transparent font-lighter text-black dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <p className="animate-pulse">Explore &nbsp; more</p>
        </Button>
      </Link>
    </div>
  );
};

export default ExploreService;
