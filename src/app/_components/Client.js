'use client'
import React from 'react';
import Heading from './Heading'

import Feedback from './Feedback';
const Client = () => {


  const projects = [
    {
      img: '/image/home.png',
      projectName: "Student Survey Portal",
      madeFor: "Made for IT Computer Education World",
      feedback: "As the Branch Head at IT Computer Education World, I am excited to share our positive experience with the **Student Survey Portal** developed by TechCanva. This platform was specifically designed to streamline and manage our student admission records and essential details. It has significantly improved our ability to store, organize, and access student information efficiently. The system captures all necessary admission data, providing an organized overview of prospective students. The user-friendly interface makes it easy for our team to maintain accurate records, and the platform’s intuitive design has greatly enhanced our administrative processes. We are confident that this solution will continue to benefit our institution for years to come.",
      client: "Deepak Thakur",
      url: "https://techtutoronline-dmy8.vercel.app",


    },

    {
      img: '/image/ecom2.png',
      projectName: " E-Commerce Website",
      madeFor: "",
      feedback: "E-Commerce Website developed by TechCanva. This platform has been a game-changer for managing our online sales, with integrated features such as secure payment gateway checkout, admin panel, OTP verification, and password recovery. These functionalities have made the process seamless for both administrators and customers. The intuitive and user-friendly design of the site has made it easy to navigate and manage, allowing us to efficiently handle transactions and ensure smooth customer interactions. This project has significantly enhanced our online operations, and we are excited to continue utilizing it for our future endeavors.",
      client: "client",
      url: "https://ecom-gamma-five.vercel.app",

    },

  ]




  return (
    <section className="text-foreground body-font px-5  dark:bg-grid-small-white/[0.2] bg-background py-12 " >


      {/* <Heading word={'Our Projects Showcase'}/> */}
      <div className='px-1 md:px-10'>

        <h3 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 text-left">Our Projects Showcase</h3>
        <div className="w-full border-b-2 my-2 relative border-blue-300">
          <div className="w-[15px] h-[15px] absolute -top-1.5 right-0 bg-blue-300"></div>
        </div>
      </div>

      {projects.map((project, ind) => {
        return (
          <Feedback img={project.img} projectName={project.projectName} madeFor={project.madeFor} feedback={project.feedback} client={project.client} url={project.url} ind={ind} key={ind} />
        )
      })}
    </section>
  );
}

export default Client;
