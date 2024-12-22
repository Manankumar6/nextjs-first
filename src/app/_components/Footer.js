import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMail } from "react-icons/io5";
import { Mail } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="text-foreground body-font bg-muted dark:bg-background dotted-background">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex flex-col items-center md:mx-0 mx-auto text-center md:text-center">
          <Link href="/" className="flex title-font font-medium items-center justify-center text-gray-900">
            <span className="logo font-bold text-indigo-500">
              <Image src='/image/logo4.png' width={70} height={70} alt='logo' />
            </span>
          </Link>
          <b className='text-xl mt-2'>TechCanva</b>
          <p className="text-[10px] tracking-widest mt-1">Your Vision, Our Canvas</p>
          <p className='text-[1rem] text-balance'>India's #1 in Web Development, delivering quality websites with engaging animations at great prices.</p>
        </div>

        <div className="flex-grow flex  flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-300  tracking-widest text-sm mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
           
             
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-300">Services</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-300">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-300">Contact Us</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-300  tracking-widest text-sm mb-3">CONNECT WITH US</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-300">Get in Touch</Link>
              </li>
              
              <li>
                <Link href="/feedback" className="text-gray-500 hover:text-gray-300">Feedback</Link>
              </li>
            
              <li>
                <Link href="/events" className="text-gray-500 hover:text-gray-300">Events</Link>
              </li>
              <li className="flex items-center justify-center md:justify-normal">
                <Mail className="text-gray-500 hover:text-gray-300" /> 
                  <Link target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=support@techcanva.in&su=Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..." className="text-indigo-500 hover:underline ms-2">
                    support@techcanva.in
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-normal">
                <Mail className="text-gray-500 hover:text-gray-300" /> 
                  <Link target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=support@techcanva.in&su=Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..." className="text-indigo-500 hover:underlin ms-2">
                    info@techcanva.in
                  </Link>
                </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center md:text-left">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
             
             
             
              <li>
                <Link href="/refund" className="text-gray-500 hover:text-gray-300">Refund Policy</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-300">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/termandcondition" className="text-gray-500 hover:text-gray-300">Terms of Service</Link>
              </li>
            </nav>
          </div>
        
         

        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto py-4 px-5 my-auto flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 TechCanva —
           <span> techcanva.in</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/manan.kumar.144734/" target='_blank' className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@techcanva.in&su=Inquiry&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about..."
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <IoMail className='w-5 h-5' />
            </Link>




            <Link target='_blank' href="https://www.instagram.com/manankumar_06/?igsh=NzQxYzZiM3o3aWdw" className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link target='_blank' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
