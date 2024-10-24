import React from 'react';

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="web service"
                className="object-cover object-center h-full w-full"
                src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/6553f6baeec899d017444f0c_7%2B%20Sites%20Offering%20Outstanding%20Web%20Design%20Services%20A%2B%20List.webp"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Web Development Services</h2>
            <p className="leading-relaxed text-base">
              Our team specializes in creating custom web solutions tailored to your business needs. From responsive designs to user-friendly interfaces, we ensure a seamless experience.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded">
              Get Started
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="digital marketing"
                className="object-cover object-center h-full w-full"
                src="https://maverick-group.com/wp-content/uploads/2021/04/Digital-Marketing-Solutions-6.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Digital Marketing Solutions</h2>
            <p className="leading-relaxed text-base">
              Elevate your brand with our comprehensive digital marketing services, including SEO, social media management, and targeted advertising to reach your audience effectively.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>


      {/* Hero Sectoin  */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img 
            alt="Web Development Services" 
            className="object-cover object-center rounded" 
            src="https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg" 
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before Your Competitors Get Ahead
            <br className="hidden lg:inline-block" /> Custom Web Solutions
          </h1>
          <p className="mb-8 leading-relaxed">
            Transform your online presence with tailored web development services. Our team specializes in creating responsive and user-friendly websites that cater to your business needs. From modern designs to seamless integrations, we ensure your site stands out in a crowded digital landscape.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
