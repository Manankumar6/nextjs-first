'use client'; // Required for hooks in Next.js app router

import Image from 'next/image';
import React, { useState } from 'react';

const Technology = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('frontend'); // Default category

  // Technology Data
  const technologies = {
    frontend: [
      { name: 'React.js', icon: '/icons/react.png' },
      { name: 'Next.js', icon: '/icons/next.png' },
      { name: 'Vue', icon: '/icons/vue.png' },
      { name: 'Angular', icon: '/icons/angular.png' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
    ],
    backend: [
      { name: 'JavaScript', icon: '/icons/js.png' },
      { name: 'Node.js', icon: '/icons/node.png' },
      { name: 'Express.js', icon: '/icons/express.png' },
      { name: 'Next.js', icon: '/icons/next.png' },

      { name: 'Python', icon: '/icons/python.png' },
    ],
    cms: [
      { name: 'WordPress', icon: '/icons/wordpress.png' },

      { name: 'Wix', icon: '/icons/wix.png' },
      { name: 'Drupal', icon: '/icons/drupal.png' },
      { name: 'Magento', icon: '/icons/magento.png' },
    ],
  };
  return (
    <div className='w-full min-h-40 p-5 md:p-10 relative'>

      <h1 className='text-2xl md:text-6xl md:p-10 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700 dark:from-gray-200 dark:to-gray-600'>TECHNOLOGIES</h1>

      {/* Category Buttons */}
      <div className='md:w-1/4 w-[70%] flex justify-between py-5 md:px-10'>
        <button
          onClick={() => setSelectedCategory('frontend')}
          className={`uppercase ${selectedCategory === 'frontend' ? 'font-bold text-blue-400' : ''}`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory('backend')}
          className={`uppercase ${selectedCategory === 'backend' ? 'font-bold text-blue-400' : ''}`}
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory('cms')}
          className={`uppercase ${selectedCategory === 'cms' ? 'font-bold text-blue-400' : ''}`}
        >
          CMS
        </button>
      </div>

      <hr className='md:mx-10' />

      {/* Display Technologies Based on Selected Category */}
      <div className='py-10 md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {technologies[selectedCategory].map((tech, index) => (
          <div
            key={index}
            className='border border-gray-800 text-center p-4 rounded-lg min-h-[100px] bg-slate-900 shadow-md hover:shadow-lg transition'
          >
            {/* Image with hover effect */}
            <Image
              src={tech.icon}
              width={500}
              height={500}
              alt={tech.name}
              className='z-10 w-12 h-12 mx-auto my-3 invert transition-transform duration-300 hover:scale-110 fill-blue-400'
            />
            <h2 className='text-xl font-bold'>{tech.name}</h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Technology;
