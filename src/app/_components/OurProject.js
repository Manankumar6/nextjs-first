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
import { Button } from "@/components/ui/moving-border";
const OurProject = () => {
  const projectData = [
    {
      img: "/image/mshomedecor.png",
      title: "MS HOME DECOR – Interior Website",
      desr: "A beautifully crafted interior and furniture showcase website designed to help businesses present their products online instead of sending PDFs on WhatsApp. Customers can easily explore categories, view details, and inquire directly. Built with a modern UI and responsive design to make interior browsing effortless and professional.",
      link: "https://mshomedecor.in/"
    },
    {
      img: "/image/bbstudio.png",
      title: "Blueberries Studio – Showcase Website",
      desr: "TechCanva created a professional showcase website for our studio that beautifully presents our work, services and portfolio all in one place. Earlier we had to share our work individually with clients, but now they can explore our studio profile, previous projects, and creative approach directly on the website. The modern design and smooth user experience truly represent our brand. We are very happy with the final result and the entire development process.",
      link: "https://blue-berries-studios.vercel.app/"
    },
    {
      img: "/image/foodcafe.png",
      title: "Food Café – Digital Food Ordering System",
      desr: "A modern restaurant web application built for seamless digital dining. Cool Caffé features real-time menu updates, cart management, order tracking, and admin controls — developed with Next.js, MongoDB, and Socket.IO to deliver a fast, interactive, and scalable experience.",
      link: "https://food-cafe-template.vercel.app/"
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



  ]
  return (

    <section className=" bg-background dark:text-gray-400 dark:bg-grid-small-white/[0.2] px-6  md:py-12 text-center">
      <div className="flex lg:flex-row flex-col">

        <div className='lg:w-1/2 order-2 md:order-1'>


          <p className="mt-4 max-w-lg mx-auto text-justify  text-lg mb-4 ">
            At TechCanve, we are passionate about delivering innovative digital solutions that are tailored to meet the unique needs of businesses across various industries. Our expertise spans fields including e-commerce, healthcare, education, finance, and entertainment, helping companies address challenges and unlock new opportunities through custom-built platforms.
            <br /><br />
            With a deep understanding of industry-specific needs, we create user-friendly e-commerce websites that provide seamless shopping experiences, secure healthcare and finance applications that ensure data privacy, and educational platforms that promote engagement and accessibility. Additionally, our entertainment solutions bring captivating and intuitive experiences to users around the world.
          </p>

        </div>
        <Carousel id="food-cafe" className="w-full max-w-lg mx-auto my-auto overflow-hidden md:overflow-visible order-1 md:order-2 ">
          <CarouselContent>
            {projectData.map((project, index) => (
              <CarouselItem key={index}>
                <div >
                  <Card>
                    <CardContent className="flex aspect-square  items-center p-4 flex-col ">
                      <img src={project.img} alt={index} />
                      <p className="text-2xl font-semibold mt-5">{project.title}</p>
                      <p className='text-sm text-justify'>{project.desr}</p>
                      <div className="mt-10">
                        <Link
                          href={project.link}
                          target='_blank'
                        >
                          <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
                          >

                            View Live
                          </Button>
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
