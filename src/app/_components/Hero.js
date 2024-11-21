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
      features: [
        '5-page stunning and responsive website design',
        '1 year of free hosting and domain',
        '1 business email setup',
        'Fast loading speed and SEO optimized',
        'Contact form integration',
        '1 month of free maintenance and support',
      ],
    },
    // Future offers can be added here
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={500}
            height={500}
            alt="Web Development Services"
            className="object-cover object-center rounded"
            src="/image/hero.gif"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 slide-in">
            Welcome to <span className="text-indigo-600">TechCanva</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl slide-in" style={{ animationDelay: '0.2s' }}>
            Looking for an experienced MERN Stack developer to bring your web project to life? With over{' '}
            <span className="font-bold">5</span> years of expertise in full-stack development, we specialize in
            building dynamic, responsive, and scalable web applications that deliver exceptional user experiences
            and meet the demands of modern businesses.
          </p>
        </div>
      </div>

      {/* Special Offer Banner */}
      <section className="text-center py-20 bg-indigo-700 text-white">
        <h1 className="text-2xl md:text-5xl font-bold">Special Offer This Month!</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get your stunning static website developed for just <span className="font-bold text-xl">₹6,999!</span>
        </p>
      </section>

    <div className="flex w-full flex-col lg:flex-row  items-center">
    <div className='w-full md:w-1/2'>

      {/* Dynamic Offer Sections */}
      {offers.map((offer) => (
        <LimitedOffer
        key={offer.id}
        title={offer.title}
        regularPrice={offer.regularPrice}
        offerPrice={offer.offerPrice}
        features={offer.features}
        />
      ))}
      </div>
      <div className="w-full md:w-1/2 items-center  overflow-hidden">
      <Image src={'/image/offer.gif'} width={100} height={100} alt='offer' className='w-full object-center md:p-10' />
      </div>
          </div>

          {/* Google Ads  */}
      <Ads/>
    </section>
  );
};

export default Hero;
