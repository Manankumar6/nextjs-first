'use client'
import React from 'react';


import Feedback from './Feedback';
const Client = () => {


  const projects = [
    {
  img: '/image/mshomedecor.png',
  projectName: "MS HOME DECOR – Interior Website",
  madeFor: "MS Home Decor",
  feedback:  "TechCanva has created a professional and visually appealing interior website for our business. Now we don’t need to share product images and details manually with customers—everything is available online with categories, product descriptions, and inquiry options. The website properly represents our brand and helps us convert more customers. We are extremely happy with the design quality, performance and overall working process.",
  client: "Ashish Singh",
  url: "https://mshomedecor.in/"
},
  {
  img: '/image/bbstudio.png',
  projectName: "Blueberries Studio – Showcase Website",
  madeFor: "Blueberries Studio",
  feedback:
    "TechCanva created a professional showcase website for our studio that beautifully presents our work, services and portfolio all in one place. Earlier we had to share our work individually with clients, but now they can explore our studio profile, previous projects, and creative approach directly on the website. The modern design and smooth user experience truly represent our brand. We are very happy with the final result and the entire development process.",
  client: "Harsh Jain",
  url: "https://blue-berries-studios.vercel.app/"
},

    {
  img: '/image/foodcafe.png',
  projectName: "Fool Café – Food Ordering Website",
  madeFor: "Fool Café",
  feedback: "Fool Café’s digital platform, developed by TechCanva, has transformed how we manage our restaurant. With real-time menu management, customized cart system, dynamic order tracking, admin dashboard, and mobile-optimized design, it offers an intuitive experience for both customers and staff. Technologies like Next.js, MongoDB, and Socket.IO power its responsiveness and reliability. This project has streamlined our operations and elevated our brand’s digital presence.",
  client: "Client",
  url: "https://food-cafe-template.vercel.app/"
}
,
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
