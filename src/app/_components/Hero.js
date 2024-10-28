import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={500}
            height={500}
            alt="Web Development Services"
            className="object-cover object-center rounded"
            src="/image/hero.gif"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 slide-in">
            Welcome to <span className="text-indigo-600">TechCanva</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl slide-in" style={{ animationDelay: '0.2s' }}>
            Looking for an experienced MERN Stack developer to bring your web project to life? With over{' '}
            <span className="font-bold">5</span> years of expertise in full-stack development, we specialize in
            building dynamic, responsive, and scalable web applications that deliver exceptional user experiences
            and meet the demands of modern businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
