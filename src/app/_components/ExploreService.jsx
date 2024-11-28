import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";


const ExploreService = () => {
    
  return (
   
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl my-10 lg:text-7xl font-bold text-center text-black dark:text-white  tracking-tight">
     <p className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600"> Explore Our Services</p>
      <p className="mt-4 w-full md:w-1/2 px-5 mx-auto text-sm font-light tracking-wide text-justify md:text-center text-gray-700 dark:text-gray-300 mb-10">
          We offer a range of exciting services designed to make your experience
          better. Whether you're looking for innovative solutions or need help
          with specific needs, our team is ready to assist. Explore all that we
          have to offer and let us help you achieve your goals.
        </p>
        <Link href={'/about'}  >
        <Button borderRadius="2rem"
            className="bg-indigo-200 dark:bg-transparent font-lighter text-black dark:text-white border-neutral-200 dark:border-slate-800 ">
                <p className="animate-pulse">Explore &nbsp; more</p>
        </Button>   
                </Link>
        {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div> */}
      </h2>
    </BackgroundBeamsWithCollision>
   
  );
};

export default ExploreService;
