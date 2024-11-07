'use client'
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Feedback from './Feedback';
const Client = () => {


  const projects = [
    {
      img:'/image/client.png',
      projectName:"Student Survey Portal",
      madeFor:"Made for IT Computer Education World",
      feedback:"As the Branch Head at IT Computer Education World, I am excited to share our positive experience with the **Student Survey Portal** developed by TechCanva. This platform was specifically designed to streamline and manage our student admission records and essential details. It has significantly improved our ability to store, organize, and access student information efficiently. The system captures all necessary admission data, providing an organized overview of prospective students. The user-friendly interface makes it easy for our team to maintain accurate records, and the platform’s intuitive design has greatly enhanced our administrative processes. We are confident that this solution will continue to benefit our institution for years to come.",
      client:"Deepak Thakur"
    },
    
    {
      img:'/image/ecom2.png',
      projectName:" E-Commerce Website",
      madeFor:"",
      feedback:"E-Commerce Website developed by TechCanva. This platform has been a game-changer for managing our online sales, with integrated features such as secure payment gateway checkout, admin panel, OTP verification, and password recovery. These functionalities have made the process seamless for both administrators and customers. The intuitive and user-friendly design of the site has made it easy to navigate and manage, allowing us to efficiently handle transactions and ensure smooth customer interactions. This project has significantly enhanced our online operations, and we are excited to continue utilizing it for our future endeavors.",
      client:"client"
    },

  ]



  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in ms
      once: false, // Only animate once on scroll
    });
  }, []);
  return (
    <section className="text-gray-600 body-font  py-12" data-aos="fade-up"
      data-aos-delay={100}>
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0   lg:ps-16">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Completed Projects</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>

     {projects.map((project,ind)=>{
      return(
        <Feedback img={project.img} projectName={project.projectName} madeFor={project.madeFor} feedback={project.feedback} client={project.client} ind={ind} />
      )
     })}
    </section>
  );
}

export default Client;
