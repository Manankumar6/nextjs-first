'use client'
import MovingCircle from '@/components/MovingCircle';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const EventPage = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed tracking-wide dark:bg-background dark:text-white">
            <section className="text-center mt-24 relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
                <div className="relative z-30"> {/* Added relative and z-index */}
                    <MovingCircle count={8} />

                    <h1 className='text-4xl md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in'>Special Offer This Month!</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Get your stunning static website developed for just <span className="font-bold text-xl">₹7,999!</span>
                    </p>

                </div>

                {/* Background Shape */}
                <div className="w-1/2 h-[31rem]  rounded-full min-h-full bg-slate-700 absolute  md:-right-20 -right-20 -top-16   md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in  "></div>
            </section>




            {/* Offer Section */}
            {/* <section className="flex flex-wrap w-full dark:bg-gray-900 mx-auto px-6 py-16 text-center">

                <div className='w-full md:w-1/2 flex flex-col justify-center  p-8 md:p-20 '>
                    <h2 className="text-3xl font-semibold mb-4">Limited Time Offer</h2>
                    <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                        Our regular price for a static website is
                        <span className="line-through text-red-600 ml-1">₹15,000</span>.
                        This month, you can avail it for only
                        <span className="font-bold text-xl">₹6,999!</span>
                    </p>
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:text-white">
                        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">What You Get:</h3>
                        <ul className="list-disc list-inside mt-4 text-left text-gray-700 dark:text-gray-300">
                            <li>5-page stunning and responsive website design</li>
                            <li>1 year of free hosting and domain</li>
                            <li>1 business email setup</li>
                            <li>Fast loading speed and SEO optimized</li>
                            <li>Contact form integration</li>
                            <li>1 month of free maintenance and support</li>
                        </ul>
                    </div>
                    <div className="mt-10 flex justify-center animate-bounce">
                        <a
                            href="/contact"
                            className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition duration-300 space-x-2 dark:bg-indigo-700 dark:text-white dark:hover:bg-indigo-600"
                        >
                            <span>Claim Your Offer Now</span>
                            <FaArrowRightLong />
                        </a>
                    </div>

                </div>


                <div className='w-full md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0'>
                    <Image
                        src={'/image/sale.png'}
                        width={500}
                        height={500}
                        alt="Sale Image"
                        className='w-full h-auto md:h-[70vh] rounded-lg shadow-lg'
                    />
                </div>
            </section> */}

            <section className='flex flex-col min-h-48 md:flex-row w-full justify-between mx-auto text-center space-y-8 md:space-y-0 md:space-x-8'>
                <div className='w-full md:w-1/2 flex flex-col text-left justify-center p-10 order-2 md:order-1'>
                    <h1 className='text-3xl sm:text-4xl mb-5'>Boost your business with an affordable, hassle-free professional website</h1>
                    <strong className='text-xl sm:text-2xl mb-5'>Why Choose Us? </strong>
                    <ul className='list-disc pl-5 text-left'>
                        <li>5-page stunning and responsive website design</li>
                        <li>1 year of free hosting and domain</li>
                        <li>Affordable, Hassle-Free Service</li>
                        <li>Contact form integration</li>
                        <li>SEO-Friendly and Mobile Optimized</li>
                    </ul>
                    <div className="mt-10 flex items-center gap-x-5 justify-start">
                        <Link href={'/contact'}>
                            <Button type="button" variant={'secondary'} className='px-3 py-5'>
                                Claim Now
                                <ArrowRightIcon />
                            </Button>
                        </Link>
                        <Link href={'/pricing'}>
                            <Button type="button" variant={'outline'} className='px-3 py-5'>
                                Explore more
                                <ArrowRightIcon />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center bg-gray-900 order-1 md:order-2'>
                    <div className='w-full sm:w-[80%] h-[80%] md:border border-slate-500 md:rounded-xl bg-background relative left-0 sm:-left-20 flex flex-col justify-center items-center'>
                        <h1 className='text-3xl sm:text-4xl mb-5 text-white'>Transform Your Business Online - Limited Offer at</h1>
                        <p className='text-3xl sm:text-4xl text-white'>
                            <span className='text-xl line-through text-red-500'>₹15,000</span> ₹7,999
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full py-20 bg-gray-900 text-center '>
                <h2 className='text-3xl text-white mb-5'>Ready to Take Your Business Online?</h2>
                <p className='text-xl text-white mb-5'>Claim your professional static website at an affordable price before the offer expires!</p>
               
            </section>

            {/* Why Choose Us Section */}
            {/* <section className="container mx-auto px-6 py-16 text-center dotted-background">
                <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                    We are dedicated to delivering high-quality websites that not only look great but also perform excellently.
                    Our team of experienced professionals ensures that your project is completed on time and meets all your requirements.
                </p>
            </section> */}

            {/* Contact Information Section */}
            <section className="bg-indigo-700 text-white py-16 dark:bg-background dark:text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Need More Information?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        If you have any questions regarding this offer, feel free to reach out to us at
                        <a href="mailto:support@techcanva.in" className="underline"> support@techcanva.in</a> or visit our
                        <a href="/contact" className="underline"> Contact Us</a> page.
                    </p>
                </div>
            </section>
           
        </div>
    );
};

export default EventPage;
