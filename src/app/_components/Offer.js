import Link from 'next/link';
import Card from '../_components/Card'
import React from 'react';

const Offer = () => {

  const cards = [
    {
      title: "Web Design ",
      text: "Incorporate the best website designs using high-end User Interaction technologies like Adobe XD, Figma, etc. Launch your own global identity with our experts, who carry great expertise in web design from scratch to end.",
      img:'/image/webdesign.gif'
    },
   { title: "24*7 Free Support",
    text: "Our clients are our priority, and we are active across all communication channels to provide full customer support. Any problem in services like website designing and e-commerce development will be addressed with utmost priority. We have a 100% record in customer support.",
    img:'/image/service.gif'
  },
    {
      title:'Web Development',
      text:"We are the best web design company in India with highly experienced coders. Our way of working is very cool, and our potential to deliver top-notch websites is commendable. We focus on demanding technologies, frameworks, and tools.",
      img:'/image/web.gif'
    },
    {
      title:"100% Responsive Websites",
      text:"Website responsiveness is a very critical parameter for the success of your business venture. Get your device responsive website design to reach your potential audience across all devices. Trending technologies and frameworks are available for 100% website responsiveness.",
      img:'/image/responsive.gif'
    },
    {
      title:"Content Writing",
      text:"We provide content writing services to cater to all your content requirements under one roof. It includes blog writing for websites, web content writing, marketing content, research articles, press release, product descriptions, etc.",
      img:'/image/content.gif'
    },
    {
      title:"Logo Designs",
      text:"Our logo design service is for multiple industries, such as real estate, education, financial institutions, food, hospitality, information technology, fashion, and more. We also provide custom logo design services.",
      img:'/image/logo.gif'
    }
  ]


  return (
    <div className="w-full  mx-auto px-4 ">
      <div class="flex flex-wrap w-full mb-20 px-10">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0   lg:ps-16">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What We Offer ?</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">  We specialize in delivering high-quality web development solutions tailored to meet the unique needs of each client. From full-stack development to responsive design and cloud deployment, We ensure that your digital presence stands out and performs seamlessly across all platforms.</p>
          </div>
       <div className="flex flex-wrap justify-center gap-4 p-4"> {/* Flex container with wrapping */}
    {cards.map((card,ind)=>{
      return (
        <div key={ind} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Card title={card.title} text={card.text} img={card.img} />
        </div>

      )
    })}
    </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          
          {/* Card  */}

          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2  p-4">
              <div class="bg-gray-100 p-6 h-[30rem] rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/fullstack.jpg" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Full-Stack Development Expertise</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>End-to-end development using the MERN stack (MongoDB, Express.js, React, and Node.js).</li>
                  <li>Custom web applications tailored to your unique requirements.</li>
                  <li>Seamless integration of frontend and backend technologies for fast, secure, and efficient web solutions.</li>
                </ul>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2  p-4">
              <div class="bg-gray-100 p-6 h-[30rem] rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/responsive.jpg" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Responsive & Modern Design</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Mobile-first design approach to ensure your application looks great and functions perfectly on all devices.</li>
                  <li>Pixel-perfect, UI/UX-optimized interfaces that enhance user interaction.</li>
                </ul>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2  p-4">
              <div class="bg-gray-100 p-6 h-[30rem] rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/scalable.jpg" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Scalable, Robust Backend Solutions</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>RESTful APIs and GraphQL for efficient data handling and communication.</li>
                  <li>Secure authentication, authorization, and user management systems with JWT or OAuth.</li>
                  <li>Robust, high-performance Node.js and Express.js backends to handle all your data needs.</li>
                </ul>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2  p-4">
              <div class="bg-gray-100 p-6 h-[30rem] rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/database.jpg" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Database Management</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Efficient data modeling and management using MongoDB with Mongoose for seamless database integration.</li>
                  <li>Optimized database performance and reliable data storage for your growing application.</li>
                </ul>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2  p-4">
              <div class="bg-gray-100 p-6 h-[30rem] rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/devops.jpg" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Cloud Deployment & DevOps</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Expertise in cloud platforms like AWS, Heroku, and Vercel to deploy and manage your web applications.</li>
                  <li>Continuous integration and delivery (CI/CD) pipelines to ensure fast, reliable deployments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="py-16 bg-indigo-700 text-white text-center">
    <h2 className="text-3xl font-bold">Explore Our Services</h2>
    <p className="mt-4 text-lg max-w-2xl mx-auto">
        Discover how our tailored solutions can help your business thrive. From web development to digital marketing, we have you covered!
    </p>
    <Link href='/service'>
        <button className="mt-8 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            View Our Services
        </button>
    </Link>
</section>






    </div>

  );
};

export default Offer;
