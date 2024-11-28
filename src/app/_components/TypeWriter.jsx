"use client";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
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
  return (
    (<div className="flex relative  flex-col items-center justify-center h-[30rem]  ">
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
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       
        <Link href={'/contact'}>
          <Button borderRadius="2rem"
            className="bg-indigo-200 dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800 ">
           <p className="animate-pulse"> Contact now</p>
          </Button>
        </Link>
      </div>
    </div>)
  );
}
