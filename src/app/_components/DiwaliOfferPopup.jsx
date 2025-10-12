'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/moving-border'
import { Phone, Sparkle } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'

export default function DiwaliOfferBanner() {
  const carouselImages = [
    'https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg',
    'https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68c49c3f1ab050b7a18f5efe_60107f8fdb0303bf44b92db1_6002086f72b727612b01e255_mueble.jpeg',
    'https://themefisher.com/blog/edubin.webp',
    'https://themewagon.com/wp-content/uploads/2020/10/aievari.jpg',
    'https://wrapmarketusercontent.com/assets/items/thumb/6af5272d95517f0350ab9393f6350c90039cf7a0ffc2e8d295b6cdcd85c8855a.webp?v=1732200882',
    'https://i.pinimg.com/736x/16/23/98/1623984b4c61d256aae8124c95257572.jpg',
    'https://www.templateshub.net/uploads/1537353019enrollthumb.jpg',

  ]
  return (
    <section className="relative mt-28 md:mt-20 w-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-950 text-white py-16 md:py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/image/diwali-pattern-dark.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />

      {/* Left Text Section */}
      <div className="relative flex-1 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 mb-6">
          <img src="https://rosepng.com/wp-content/uploads/2024/04/s11728_diwali_lamp_isolated_on_white_background_-stylize_200_97213633-2d82-434a-af56-f6961b5086fe_3-photoroom-png-photoroom_11zon.png" alt="diwali offer" className="w-20 h-20 " />
          <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-slate-200 to-indigo-300 drop-shadow-[0_4px_10px_rgba(100,125,250,0.5)]">
            Diwali Dhamaka Offer <Sparkle />
          </h2>
          <img src="https://rosepng.com/wp-content/uploads/2024/04/s11728_diwali_lamp_isolated_on_white_background_-stylize_200_97213633-2d82-434a-af56-f6961b5086fe_3-photoroom-png-photoroom_11zon.png" alt="diwali offer" className="w-20 h-20 " />
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 drop-shadow-[0_4px_15px_rgba(200,150,255,0.5)]">
          Launch Your Online Presence – Quick, Reliable & Impactful
        </h3>

        {/* Offer Description */}
        <p className="text-base md:text-lg mb-4 text-gray-300 max-w-xl mx-auto md:mx-0">
          <span className="line-through text-gray-400">₹ 2,999</span> <span className="font-bold text-indigo-300 text-2xl">₹ 1,499</span> – Get a mobile-friendly website packed with essential features:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 max-w-xl mx-auto md:mx-0">
          <li>WhatsApp chat & call button for instant customer communication</li>
          <li>Google Maps integration to show your location</li>
          <li>Enquiry & contact forms for lead generation</li>
          <li>Fast & responsive design for mobile & desktop</li>
          <li>Basic SEO setup to get discovered online</li>
          <li>Simple CMS to update your content easily</li>
        </ul>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
          Perfect for small businesses, local shops, freelancers & service providers looking to kickstart their online presence this festive season.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap items-center gap-4 mt-6 justify-center md:justify-start">
          {/* Claim Offer Button */}
          <Link href='/contact'>
            <Button
              borderRadius="2rem"
              className="bg-gradient-to-r from-slate-800 via-gray-900 to-indigo-900 text-white font-extrabold text-lg px-8 py-3 shadow-[0_4px_15px_rgba(75,85,99,0.5)] hover:shadow-[0_6px_20px_rgba(100,125,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              🎁 Claim Offer Now
            </Button>
          </Link>

          {/* Call Button */}
          <a href="tel:+916398401607">
            <Button
              borderRadius="2rem"
              className="bg-gradient-to-r from-gray-800 via-slate-900 to-indigo-950 text-white font-extrabold text-lg px-8 py-3 shadow-[0_4px_15px_rgba(75,85,99,0.5)] hover:shadow-[0_6px_20px_rgba(100,125,255,0.6)] hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
            >
              📞 Call 6398401607
            </Button>
          </a>
        </div>


      </div>

      {/* Right Carousel Section */}
      <div className="relative flex-1 w-full md:max-w-lg rounded-3xl overflow-hidden shadow-[0_0_60px_-10px_rgba(75,85,99,0.5)] z-10 mt-8 md:mt-0">
        <Carousel id="diwali-offer" className="w-full mx-auto my-auto overflow-hidden md:overflow-visible">
          <CarouselContent>
            {carouselImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[420px]">
                  <img
                    src={src}
                    alt={`Diwali Offer ${index + 1}`}
                    className="object-contain w-full h-full rounded-3xl transition-transform duration-700 ease-out"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>

  )
}