'use client'
import React from 'react';
import LimitedOffer from './LimitedOffer';
import Ads from './Ads';
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { HeroParallaxDemo } from './HeroParallex';
import { TypewriterEffectSmoothDemo } from './TypeWriter';
import WhyChooseUs from './WhyChooseUs';
import ExploreService from './ExploreService';

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
    <section className="text-foreground bg-background body-font ">
      <div className="  justify-center flex   items-center ">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-widest text-transparent md:text-7xl"
          >
            Welcome to <br />  <span className='tracking-wide'>TechCanva</span>

          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // Slightly different for subtle distinction
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5, // Starts a bit later for a staggered effect
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-sm md:text-lg text-muted-foreground max-w-4xl"
          >
            Looking for an experienced MERN Stack developer to bring your web project to life? With over{' '}
            <span className="font-bold">5</span> years of expertise in full-stack development, we specialize in
            building dynamic, responsive, and scalable web applications that deliver exceptional user experiences
            and meet the demands of modern businesses.
          </motion.p>
        </LampContainer>

       
      </div>


          <HeroParallaxDemo/>
          <TypewriterEffectSmoothDemo/>
          <WhyChooseUs/>
          <ExploreService/>

    

      {/* Google Ads */}
      <Ads />
    </section>
  );
};

export default Hero;
