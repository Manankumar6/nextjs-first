import Link from 'next/link'
import React from 'react'
import CountdownTimer from './Countdown'

const LimitedOffer = ({ title, regularPrice, offerPrice, features, durationInDays }) => {



  return (
    <section className="container  mx-auto px-6 py-16 text-center slide-in">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg max-w-3xl mx-auto text-foreground">
        Our regular price for a static website is
        <span className="line-through text-red-600 ml-1">₹{regularPrice}</span>.
        This month, you can avail it for only
        <span className="font-bold text-2xl"> ₹{offerPrice}</span>!
      </p>
      <CountdownTimer
        durationInDays={durationInDays}
      />
      <div className="mt-8 p-6 bg-background rounded-lg shadow-lg max-w-md mx-auto dotted-background">
        <h3 className="text-2xl font-bold text-indigo-600">What You Get:</h3>
        <ul className="list-disc list-inside mt-4 text-left text-foreground">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block animate-bounce px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 "
        >
          Claim Your Offer Now
        </Link>
      </div>
    </section>
  )
}

export default LimitedOffer
