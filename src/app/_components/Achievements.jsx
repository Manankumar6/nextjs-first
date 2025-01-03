
import Image from 'next/image'
import React from 'react'

const Achievements = () => {
    return (
        <div className="w-full  min-h-24 md:p-10 ">

            <h1 className='text-3xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-600 py-4'>Milestones That Matter,<br /> Numbers That Inspire</h1>


            <div className="w-full h-[60vh] md:h-[50vh] overflow-hidden relative ">
                <Image
                    src="/image/achievement.jpg"
                    width={1000}
                    height={1000}
                    alt="Achievements"
                    className="w-full h-full object-cover z-0"
                />
                <div
                    className="absolute flex items-center justify-center inset-0 z-10 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.7) 100%)'
                    }}
                >

                </div>

            </div>

            {/* Stats Section with responsive layout */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 relative -top-12 z-20">
                <div className="flex items-center min-h-[10rem] bg-slate-900 flex-col justify-center">
                    <h2 className="text-3xl truncate font-bold">Happy Clients</h2>
                    <h1 className="text-4xl font-bold text-blue-500">200+</h1>
                </div>
                <div className="flex items-center min-h-[10rem] bg-slate-800 flex-col justify-center">
                    <h2 className="text-3xl truncate font-bold">Projects</h2>
                    <h1 className="text-4xl font-bold text-blue-500">150+</h1>
                </div>
                <div className="flex items-center min-h-[10rem] bg-slate-900 flex-col justify-center">
                    <h2 className="text-3xl truncate font-bold">Client Retention</h2>
                    <h1 className="text-4xl font-bold text-blue-500">95%</h1>
                </div>
                <div className="flex items-center min-h-[10rem] bg-slate-800 flex-col justify-center">
                    <h2 className="text-3xl truncate font-bold">Years of Trust</h2>
                    <h1 className="text-4xl font-bold text-blue-500">5+</h1>
                </div>
            </div>

           

        </div>
    )
}

export default Achievements
