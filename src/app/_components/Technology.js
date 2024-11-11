import Link from 'next/link'
import React from 'react'

const Technology = () => {

    const techs = [
        {
            tehcName: "HTML 5",
            img: "/techimg/html.webp"
        },
        {
            tehcName: "CSS",
            img: "/techimg/css.jpeg"
        },
        {
            tehcName: "JAVASCRIPT",
            img: "/techimg/js.jpg"
        },
        {
            tehcName: "REACT.JS",
            img: "/techimg/react.png"
        },
        {
            tehcName: "NEXT.JS",
            img: "/techimg/next.jpeg"
        },
        {
            tehcName: "NODE.JS + EXPRESS.JS",
            img: "/techimg/expres.png"
        },
        {
            tehcName: "MONGODB",
            img: "/techimg/db.png"
        },
        {
            tehcName: "BOOTSTRAP",
            img: "/techimg/boot.webp"
        },
        {
            tehcName: "TAILWIND",
            img: "/techimg/tail.jpeg"
        },
        {
            tehcName: "MATERIAL UI",
            img: "/techimg/material.png"
        },
    ]


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 w-full  lg:mb-0 ms-12 pb-6  ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Technology </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>

                <div className="flex flex-wrap -m-4">

                    {techs.map((tech, ind) => {
                        return (
                            <div className="lg:w-[20%] md:w-1/3 p-4 w-full" key={ind}>
                                <div className="block relative h-48 rounded overflow-hidden shadow-lg border">
                                    <img alt="ecommerce" className=" object-center w-full h-full block" src={tech.img} />
                                </div>
                                <div className="mt-4">

                                    <h2 className="text-gray-900 title-font text-lg font-medium">{tech.tehcName}</h2>

                                </div>
                            </div>
                        )
                    })}
                </div>





            </div>
        </section>
    )
}

export default Technology
