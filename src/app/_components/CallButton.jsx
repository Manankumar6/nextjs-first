'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Instagram, Linkedin, MessageSquare } from 'lucide-react'; // Use Lucide-react for icons

const StaticCallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/6398401607', '_blank'); // Replace with your WhatsApp number
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/manankumar_06/profilecard/?igsh=NzQxYzZiM3o3aWdw', '_blank'); // Replace with your Instagram URL
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/manan-kumar-m1906', '_blank'); // Replace with your LinkedIn URL
  };

  return (
    <div className="fixed bottom-6 md:bottom-12 right-4 z-[9999] flex flex-col space-y-3">
      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="flex items-center justify-center space-x-2 bg-green-500 text-white hover:bg-green-600 shadow-lg rounded-full p-4 dark:bg-green-600 dark:hover:bg-green-700"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call Us</span>
      </Button>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="flex items-center justify-center space-x-2 bg-green-400 text-white hover:bg-green-500 shadow-lg rounded-full p-4 dark:bg-green-500 dark:hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>

      {/* Instagram Button */}
      <Button
        onClick={handleInstagram}
        className="flex items-center justify-center space-x-2 bg-pink-500 text-white hover:bg-pink-600 shadow-lg rounded-full p-4 dark:bg-pink-600 dark:hover:bg-pink-700"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
        <span className="hidden sm:inline">Instagram</span>
      </Button>

      {/* LinkedIn Button */}
      <Button
        onClick={handleLinkedIn}
        className="flex items-center justify-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 shadow-lg rounded-full p-4 dark:bg-blue-700 dark:hover:bg-blue-800"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>
    </div>
  );
};

export default StaticCallButton;
