"use client";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { Eye, Users, Handshake, Award, Globe, Monitor, Instagram, Facebook } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "web",
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
      <p className="text-lg text-gray-600 dark:text-gray-400">
    Transforming your ideas into impactful digital solutions with expert web design, development, and marketing strategies.
  </p>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4  px-10">
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
      </div>
      {/* <Link href={'/contact'}>
        <Button borderRadius="2rem"
          className="bg-indigo-200 dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800 ">
          <p className="animate-pulse"> Contact now</p>
        </Button>
      </Link> */}
    </div>
    )
  );
}
