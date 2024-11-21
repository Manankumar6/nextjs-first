'use client'
import Image from 'next/image';
import React from 'react';

const Card = ({title, text,img}) => {
  return (
    <div className="max-w-sm mx-auto relative">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 group relative" style={{ height: '250px' }}>
        {/* Title Section */}
        <Image src={img} alt='gif' width={150} height={100} className='mx-auto mt-5' />
        <h1 className="text-2xl font-bold text-center  text-gray-800 transition-colors duration-300 cursor-pointer group-hover:text-indigo-600" style={{ height: '100px' }}>

        {title}
        </h1>

        {/* Hidden Details Section */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-400 text-white p-6 transform translate-y-full transition-transform duration-500 ease-in-out opacity-0 flex items-center justify-center group-hover:opacity-100 group-hover:translate-y-0 z-10" style={{ height: '250px' }}>
          <p className="text-sm font-semibold mb-2 ">{text}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
