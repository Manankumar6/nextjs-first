import Image from 'next/image';
import React from 'react';
import LimitedOffer from './LimitedOffer';
import Ads from './Ads';

const Hero = () => {
  const offers = [
    {
      id: 1,
      title: "Limited Time Offer",
      regularPrice: 15000,
      offerPrice: 6999,
      durationInDays: 7, 
      features: [
        '5-page stunning and responsive website design',
        '1 year of free hosting and domain',
        '1 business email setup',
        'Fast loading speed and SEO optimized',
        'Contact form integration',
        '1 month of free maintenance and support',
      ],
    },
  ];

  
  // Calculate the remaining days in the current month
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Last day of this month
  const daysLeftInMonth = Math.ceil((endOfMonth - now) / (1000 * 60 * 60 * 24)); // Remaining days

  // Update the offer duration dynamically
  const updatedOffers = offers.map((offer) => ({
    ...offer,
    durationInDays: Math.min(offer.durationInDays, daysLeftInMonth),
  }));


  
  return (
    <section className="text-foreground bg-background body-font">
      <div className="container mx-auto justify-center flex px-5 py-24   items-center dark dotted-background">
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={500}
            height={500}
            alt="Web Development Services"
            className="object-cover object-center rounded " 
            src="/image/hero.gif"
          />
        </div> */}
        <div className="  h-[20rem]  flex flex-col items-center justify-center text-center ">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 slide-in">
            <span className="bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 text-transparent bg-clip-text">
              Welcome to
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-700 text-transparent bg-clip-text">
              TechCanva
            </span>
          </h1>

          <p
            className="text-sm md:text-lg  text-muted-foreground max-w-4xl slide-in"
            style={{ animationDelay: '0.2s' }}
          >
            Looking for an experienced MERN Stack developer to bring your web project to life? With over{' '}
            <span className="font-bold">5</span> years of expertise in full-stack development, we specialize in
            building dynamic, responsive, and scalable web applications that deliver exceptional user experiences
            and meet the demands of modern businesses.
          </p>
        </div>
      </div>

      {/* Special Offer Banner */}
      <section className="text-center py-20 bg-indigo-600 text-primary-foreground dark:bg-gray-900 dark:text-secondary-foreground">
        <h1 className="text-2xl md:text-5xl font-bold">Special Offer This Month!</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get your stunning static website developed for just{' '}
          <span className="font-bold text-xl">₹6,999 !</span>
        </p>
      </section>

      <div className="flex w-full justify-center items-center dotted-background">
        <div className="w-full md:w-1/2">
          {/* Dynamic Offer Sections */}
          {updatedOffers.map((offer) => (
            <LimitedOffer
              key={offer.id}
              title={offer.title}
              regularPrice={offer.regularPrice}
              offerPrice={offer.offerPrice}
              features={offer.features}
              durationInDays={offer.durationInDays}
             
            />
          ))}
        </div>
        {/* <div className="w-full md:w-1/2 items-center overflow-hidden">
          <Image
            src={'/image/offer.gif'}
            width={100}
            height={100}
            alt="offer"
            className="w-full object-center md:p-10"
          />
        </div> */}
      </div>

      {/* Google Ads */}
      <Ads />
    </section>
  );
};

export default Hero;
