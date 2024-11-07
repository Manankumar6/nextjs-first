import React from 'react'

const Feedback = ({img,projectName,madeFor,feedback,client,ind}) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center mt-5 px-4" key={ind}>
        
        {/* Image Column */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-4">
          <img
            className="object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
            alt="Student Survey Portal"
            src={img} // Replace with your client's image URL
          />
        </div>

        {/* Text Column */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-2xl text-3xl  font-semibold text-gray-800">
          {projectName}

          </h1>
          <span className='text-gray-500 text-sm mb-4'>{madeFor}</span>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            {feedback}
          </p>
          <p className="font-bold italic text-indigo-700 mt-4">- {client} </p>


        </div>
        
      </div>
  )
}

export default Feedback
