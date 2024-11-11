import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
const OurProject = () => {
    const projectData = [
        {
          img: "/image/ecom2.png",
          title: "EShop | E-commerce Site",
          desr: "  Discover a seamless shopping experience with EShop, where quality meets convenience. Explore a curated selection of products across categories, tailored to meet all your needs with style and ease.",
          link: "https://ecom-gamma-five.vercel.app/"
        },
        {
          img: "/image/tech.png",
          title: "TechTutor Online | Student Survey Portal",
          desr: "Explore TechTutor Online's Student Survey Portal, a comprehensive platform designed to gather feedback, insights, and experiences from students. Tailored for educational institutions, this portal helps educators understand student needs, track progress, and enhance learning outcomes through structured surveys and analytics.",
          link: "https://techtutoronline.vercel.app"
        },
        {
          img: "/image/music.png",
          title: "Sound Wavy Studio",
          desr: "Immerse yourself in a vibrant audio experience at Sound Wavy Studio. A hub for music creators to record, edit, and share their soundwaves with the world, providing tools to elevate your audio creations.",
          link: "https://sound-wave-studio.vercel.app/"
        },
        {
          img: "/image/chat.png",
          title: "LinkUp | Web Chat App",
          desr: "Connect and converse seamlessly with LinkUp, a dynamic chat platform designed for real-time communication and collaboration. Perfect for both personal and professional conversations, LinkUp makes staying in touch easier than ever.",
          link: "https://mern-chat-app-three-ruby.vercel.app"
        },
      
      ]
  return (

      <section className="container mx-auto px-6 py-12 text-center">
        <div className="flex lg:flex-row flex-col">

          <div className='lg:w-1/2'>

          
            <p className="mt-4 max-w-lg mx-auto text-left text-lg mb-4 text-gray-600">
              At our company, we take pride in delivering innovative solutions across a range of industries, transforming visions into
              powerful digital experiences. With a portfolio that spans fields including e-commerce, healthcare, education, finance,
              and entertainment, we’re committed to crafting customized solutions that address specific challenges and unlock new opportunities.
              <br /><br />
              In each of these fields, we bring a deep understanding of industry-specific needs and a meticulous approach to design and
              functionality. Our e-commerce solutions enable seamless shopping experiences, while our healthcare and finance applications
              provide secure, user-centered platforms for critical services. Our educational platforms foster engagement and accessibility,
              and our entertainment solutions bring intuitive and engaging experiences to users worldwide.
             </p>

          </div>
          <Carousel className="w-full max-w-lg mx-auto my-auto overflow-hidden md:overflow-visible">
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square  items-center p-4 flex-col ">
                        <img src={project.img} />
                        <p className="text-2xl font-semibold mt-5">{project.title}</p>
                        <p className='text-sm'>{project.desr}</p>
                        <div className="mt-10">
                          <Link
                            href={project.link}
                            className="inline-block px-8 py-4 border border-indigo-500 text-indigo-500 rounded-lg font-semibold shadow-md hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out"
                          >
                            View Live
                          </Link>

                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
  )
}

export default OurProject
