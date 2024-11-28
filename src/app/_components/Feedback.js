import Link from 'next/link';
import React from 'react';

const Feedback = ({ img, projectName, madeFor, feedback, client, url, ind }) => {
  return (
    <div
      className={`container mx-auto flex flex-col-reverse lg:flex-row ${
        ind % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center mt-10 px-4`}
    >
      {/* Image Column */}
      <div
        className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0 ${
          ind % 2 === 0 ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <img
          className="object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
          alt={projectName}
          src={img}
        />
      </div>

      {/* Text Column */}
      <div
        className={`lg:flex-grow lg:w-1/2 ${ind  % 2 === 0 ? "lg:pl-24 md:pl-16" : "lg:pr-24 md:pr-16"} flex flex-col md:items-start md:text-left items-center text-justify`}
      >
        <h1 className="title-font sm:text-2xl text-3xl font-semibold dark:text-foreground text-gray-800">
          {projectName}
        </h1>
        <span className="text-gray-500 dark:text-gray-400 text-sm mb-4">{madeFor}</span>
        <p className="mb-8 leading-relaxed text-lg text-gray-700 dark:text-gray-400">{feedback}</p>
        <div className="flex gap-4 items-center">
          <p className="font-bold italic text-indigo-700 mt-4">- {client}</p>
          <Link href={url} target="_blank" className="italic text-gray-500 dark:text-gray-400 mt-4 text-sm">
            View Demo -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
