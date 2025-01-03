"use client";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { Eye, Users, Handshake, Award, Globe, Monitor, Instagram, Facebook, CheckIcon, CircleCheckIcon, ArrowRight, Circle, Quote } from "lucide-react";
import Image from "next/image";

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


  

  const CraftingData = [
    {
      title: "Web Design",
      desc: "Our web design services are all about creating visually appealing, easy-to-use websites that drive results. We focus on responsive design, smooth navigation, and a user-friendly experience to make sure your website stands out, engages visitors, and helps achieve your business goals.",
      img: '/image/webdesign.jpg'
    },
    {
      title: "Web Development",
      desc: "Our web development services focus on building secure, scalable, and high-performance websites designed to meet your unique business goals. From custom coding and CMS solutions to eCommerce platforms, we ensure your website is fast, responsive, and dynamic, helping you grow and enhance your online presence.",
      img: '/image/webdev.avif'
    },
    {
      title: "Digital Marketing",
      desc: "Unlock your business’s full potential with our comprehensive digital marketing services. From SEO and social media marketing to PPC campaigns and content creation, we help drive traffic, increase engagement, and enhance your brand’s ROI. Our data-driven approach ensures measurable success and long-term growth for your business.",
      img: '/image/digitalmarketing.jpg'
    },
  ]






  return (
    (
      <div>
        <div className="flex relative  flex-col items-center justify-center pt-10  ">
          {/* <div className="w-full absolute inset-0 h-auto">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div> */}

          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <p className="text-lg text-justify text-gray-600 dark:text-gray-400 px-5">
            Transforming your ideas into impactful digital solutions with expert web design, development, and marketing strategies.
          </p>

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



          <div className="relative  w-full overflow-hidden">
            <div className=" absolute top-0 left-0 text-white ">


              <Quote color="#60A5FA" className="fill-blue-400  relative size-24" style={{ transform: 'rotate(180deg)' }} />
              <Quote color="#eff6ff" className="fill-blue-50 absolute top-1 left-1.5 size-24" style={{ transform: 'rotate(180deg)' }} />

            </div>
            <div className="w-full z-10 px-10 py-24 overflow-hidden box-border "
            //  style={{
            //   backgroundImage: `url('/image/bg.jpg'), linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'center',
            //   backgroundSize: 'cover',
            //   backgroundBlendMode: 'darken',

            // }}
            >
              <div className="md:ps-40 pt-2 w-full ">

                <h1 className="text-2xl md:text-4xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600 ">Crafting Digital Excellence</h1>
                <p className="text-xl md:text-2xl mb-2 truncate">Your Vision, Our Expertise</p>
               
              </div>

              <div className="flex flex-wrap w-full md:p-10 gap-x-14 justify-center">
                {CraftingData.map((service, ind) => {
                  return (
                    <div key={ind} className="flex flex-col w-full md:w-1/3 lg:w-1/4 min:w-full ">
                      <Image
                        src={service.img}
                        width={500}
                        height={500}
                        alt="webdesingimage"
                        className="rounded-xl object-cover h-64" // Ensuring all images have the same size
                      />
                      <div className="text-justify my-5">
                        <h1 className="text-2xl">{service.title}</h1>
                        <div className="w-full border-b-2 my-2 relative border-blue-400">
                          <div className="w-[15px] h-[15px] absolute -top-1.5 right-0 bg-blue-400"></div>
                        </div>
                        <p className="mb-3">{service.desc}</p>
                        <Link href={'/solutions'}>
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center" >
                          Explore More <ArrowRight className="size-4 ml-2" />
                        </button>
                        </Link>
                      </div>
                    </div>

                  );
                })}
              </div>

            </div>
            <div className=" absolute bottom-5 right-0 text-white ">


              <Quote color="#60A5FA" className="fill-blue-400  relative size-24" />
              <Quote color="#eff6ff" className="fill-blue-50 absolute top-1 left-1.5 size-24" />

            </div>
          </div>
        </div>
      </div>
    )
  );
}
