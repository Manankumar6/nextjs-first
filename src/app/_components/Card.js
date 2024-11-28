'use client'
import Image from 'next/image';
import React from 'react';

const Card = ({title, text,img}) => {
  return (
    <div className="max-w-md mx-auto relative">
      <div className=" shadow-lg rounded-lg overflow-hidden dark:border-gray-800 group relative" style={{ height: '250px' }}>
        {/* Title Section */}
        <Image src={img} alt='gif' width={150} height={100} className='mx-auto mt-5'   unoptimized  />
        <h1 className="text-2xl font-bold text-center  text-foreground pt-5 transition-colors duration-300 cursor-pointer group-hover:text-indigo-600" style={{ height: '100px' }}>

        {title}
        </h1>

        {/* Hidden Details Section */}
        <div className="absolute w-full inset-0 bg-gradient-to-b from-indigo-600 to-indigo-400 text-white p-6 transform translate-y-full transition-transform duration-500 ease-in-out opacity-0 flex items-center justify-center group-hover:opacity-100 group-hover:translate-y-0 z-10" style={{ height: '250px' }}>
          <p className="text-sm font-semibold mb-2 ">{text}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
