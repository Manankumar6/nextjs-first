import Link from 'next/link';
import React from 'react';

const Technology = () => {
  const techs = [
    { techName: 'HTML 5', img: '/techimg/html.webp' },
    { techName: 'CSS', img: '/techimg/css.jpeg' },
    { techName: 'JAVASCRIPT', img: '/techimg/js.jpg' },
    { techName: 'REACT.JS', img: '/techimg/react.png' },
    { techName: 'NEXT.JS', img: '/techimg/next.jpeg' },
    { techName: 'NODE.JS + EXPRESS.JS', img: '/techimg/expres.png' },
    { techName: 'MONGODB', img: '/techimg/db.png' },
    { techName: 'BOOTSTRAP', img: '/techimg/boot.webp' },
    { techName: 'TAILWIND', img: '/techimg/tail.jpeg' },
    { techName: 'MATERIAL UI', img: '/techimg/material.png' },
  ];

  return (
    <section className="text-gray-700 body-font bg-gray-50">
      <div className="container px-6 py-24 mx-auto">
        <div className="lg:w-1/2 w-full mb-12 ">
          <h1 className="sm:text-4xl text-3xl font-semibold text-gray-900">Technologies We Use</h1>
          <div className="h-1 w-24 bg-indigo-500 rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out" key={index}>
              <img
                alt={tech.techName}
                className="object-center w-full h-48"
                src={tech.img}
              />
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center">{tech.techName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
