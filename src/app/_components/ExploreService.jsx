import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";


const ExploreService = () => {
  return (
    <div className="text-2xl  bg-transparent relative  md:text-4xl py-5 lg:text-7xl font-bold text-center text-black tracking-tight">
     

      <h1 className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600">
        Explore Our Services
      </h1>
      <p className="mt-4 w-full md:w-6xl px-5 mx-auto text-lg font-light tracking-wide text-justify md:text-center text-gray-700 dark:text-gray-300 mb-10">
  As a trusted web development company in Firozabad, we offer a wide range of services designed to help your business grow online. From modern web design and high-performance development to digital marketing and branding solutions, our team is here to make your journey smoother and more impactful. Explore our services and discover how we can help you achieve your goals with the right digital strategy.
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
