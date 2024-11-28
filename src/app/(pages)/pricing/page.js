import React from 'react'
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from '@/components/ui/moving-border';
import Link from 'next/link';
import Heading from '@/app/_components/Heading';
import GradientBackgroundSection from '@/app/_components/GradientBackgroundSection ';

const page = () => {
  const Step = ({ title }) => {
    return (
      <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="dark:text-white text-gray-700">{title}</p>
      </li>
    );
  };

  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };

  return (
    <div className="pt-12 pb-4 dark:bg-background dark:bg-grid-small-white/[0.2]">
     
      <Heading word={'Pricing Plans'} />
      {/* Subheading with an engaging message */}
      <p className="text-center text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mt-4">
        Choose the perfect plan for your needs. Transparent, affordable, and tailored for you.
        <br />
        <span className="font-bold text-indigo-600 dark:text-indigo-400"> No hidden charges, no surprises.</span>
      </p>



      <div className="flex gap-3  mt-5 flex-wrap justify-around">

        <CardSpotlight className="h-auto w-96 ">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Basic Plan</h3>
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-300">₹15,000</p>
          <div className="text-neutral-700 dark:text-neutral-200 mt-4 relative z-20">
            <p className="text-gray-700 dark:text-indigo-300 mb-4">Perfect for small businesses or startups.</p>
            <ul className="list-none  mt-2">
              <Step title="5 pages Website" />
              <Step title="1 Year Free Domain Name (.com, .in, .org)" />
              <Step title="1 Year Free Hosting (Unlimited Space)" />
              <Step title="Dynamic Website (Premium Design)" />
              <Step title="Lifetime 24/7 Free Hosting Support" />
              <Step title="Unlimited Images & Videos Upload" />
              <Step title="Free SSL Certificates" />
              <Step title="Social Media Integration" />
              <Step title="5 Free Email Ids" />
              <Step title="100% Responsive Website" />
              <Step title="Inquiry Form" />
              <Step title="1 Year Free Technical Support For Website" />
              <Step title="Annual Renewal For Hosting ₹5000" />

            </ul>
            <div className='w-full mt-5 flex justify-center'>

              <Link href='/contact' >
                <Button
                  borderRadius="1.75rem"
                  className="bg-white  dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Choose Basic
                </Button>
              </Link>
            </div>
          </div>

        </CardSpotlight>
        <CardSpotlight className="h-auto w-96">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Premium Plan</h3>
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-300">₹25,000</p>
          <div className="text-neutral-700 dark:text-neutral-200 mt-4 relative z-20">
            <p className="text-gray-700 dark:text-indigo-300 mb-4">Ideal for growing businesses looking to scale.</p>
            <ul className="list-none mt-2">
              <Step title="12 pages Website" />
              <Step title="1 Year Free Domain Name (.com, .in, .org)" />
              <Step title="1 Year Free Hosting (Unlimited Space)" />
              <Step title="Dynamic Website (Premium Design)" />
              <Step title="Admin Access" />
              <Step title="Google Search Console Setup" />
              <Step title="Lifetime 24/7 Free Hosting Support" />
              <Step title="Unlimited Images & Videos Upload" />
              <Step title="Free SSL Certificates" />
              <Step title="10 Free Email Ids" />
              <Step title="SEO Friendly Website" />
              <Step title="100% Responsive Website" />
              <Step title="Payment Gateway Integration" />
              <Step title="Social Media Integration" />
              <Step title="Call Button Integration" />
              <Step title="WhatsApp Button Integration" />
              <Step title="Inquiry Form" />
              <Step title="1 Year Free Technical Support For Website" />
              <Step title="Annual Renewal For Hosting ₹6000" />
            </ul>
            <div className='w-full mt-5 flex justify-center'>

              <Link href="/contact">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Choose Premium
                </Button>
              </Link>
            </div>
          </div>
        </CardSpotlight>
        <CardSpotlight className="h-auto w-96">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Custom Plan</h3>
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-300">Pricing Varies</p>
          <div className="text-neutral-700 dark:text-neutral-200 mt-4 relative z-20">
            <p className="text-gray-700 dark:text-indigo-300 mb-4">Tailored solutions based on your unique requirements.</p>
            <ul className="list-none mt-2">
              <Step title="Pages: According to Requirement" />
              <Step title="1 Year Free Domain Name (.com, .in, .org)" />
              <Step title="1 Year Free Hosting (Unlimited Space)" />
              <Step title="Dynamic Website" />
              <Step title="Admin Access" />
              <Step title="Lifetime 24/7 Free Hosting Support" />
              <Step title="Unlimited Images & Videos Upload" />
              <Step title="Free SSL Certificates" />
              <Step title="5 Free Email Ids" />
              <Step title="SEO Friendly Website" />
              <Step title="100% Responsive Website" />
              <Step title="Live Chat Integration" />
              <Step title="Payment Gateway Integration" />
              <Step title="Social Media Integration" />
              <Step title="Call Button Integration" />
              <Step title="WhatsApp Button Integration" />
              <Step title="Inquiry Form" />
              <Step title="1 Year 24/7 Free Support For Website" />
              <Step title="Annual Renewal ₹6000" />
            </ul>
            <div className='w-full mt-5 flex justify-center'>
              <Link href="/contact">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

          </div>
        </CardSpotlight>
      </div>
      <div className="mt-5">

        <GradientBackgroundSection/>
      </div>
         {/* FAQ Section */}
         <section className="py-16 px-4 bg-gray-100 dark:bg-background dark:bg-grid-small-white/[0.2]">
        
        <Heading word={'Frequently Asked Questions'} />
        <div className="max-w-4xl mx-auto">
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">Do you provide ongoing support?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Yes, all our plans include 24/7 support to assist you with any issues or updates.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">How long does it take to build a website?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Depending on the complexity, websites typically take 2-4 weeks to develop.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">What industries do you specialize in?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      We provide tailored web solutions for a wide range of industries including e-commerce, healthcare, education, real estate, and more.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">Can I make updates to my website on my own?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Absolutely! We provide user-friendly Content Management Systems (CMS) so you can easily update your website without technical expertise.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">What’s included in your website packages?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Our packages include custom design, responsive development, SEO optimization, hosting setup, and post-launch support.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">Do you offer SEO services?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Yes, we provide SEO-friendly websites and additional SEO packages to help improve your website's search engine rankings.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">What kind of customizations can I get?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      We offer fully customizable websites, including unique designs, custom features, integrations with third-party tools, and more.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">How secure are your websites?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      We prioritize security by implementing SSL certificates, regular updates, and secure coding practices to protect your website.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">Can you integrate third-party tools or APIs?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Yes, we can seamlessly integrate your website with various third-party tools, APIs, and platforms to enhance its functionality.
    </p>
  </div>
  <div className="mb-6" data-aos="fade-up" data-aos-delay={100}>
    <h4 className="font-semibold text-lg dark:text-gray-300">What happens after my website is launched?</h4>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      We provide post-launch support, including updates, performance monitoring, and maintenance to ensure your website runs smoothly.
    </p>
  </div>
</div>

      </section>
    </div>

  )
}

export default page