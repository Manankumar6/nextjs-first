'use client'
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is dynamic website development?",
      answer:
        "Dynamic website development involves building websites that actively respond to user interactions and preferences. Rather than displaying static information, these websites pull in real-time data and adjust content based on user inputs or behaviors. This adaptability often requires the use of advanced programming languages, frameworks, libraries, and databases, allowing developers to create a more engaging and personalized experience for each user. Dynamic sites can serve a wide range of purposes by generating content on the fly and are essential for applications that need to display up-to-date or user-specific information.",
    },
    {
      question: "What is responsive website development?",
      answer:
        "Responsive website development focuses on designing websites that automatically adjust to fit the screen size, platform, or device a user is viewing them on. Using technologies like HTML5 and CSS3, developers can create layouts and content that seamlessly adapt to desktops, tablets, and mobile devices. Responsive design also includes making sure interactive elements—like buttons, forms, and navigation—work effortlessly across different devices, enabling users to enjoy a consistent and accessible experience whether on a phone or a computer.",
    },
    {
      question: "What is the difference between web design and development?",
      answer:
        "Web design and development each play a crucial role in building websites but have different focuses. Web design centers on the look and feel of a website, creating layouts and visual elements that enhance user experience. Designers work on the aesthetics, often using tools like Photoshop or Illustrator to craft appealing and user-friendly interfaces. Web development, on the other hand, focuses on the functionality behind the scenes. Developers write code—using languages like HTML, CSS, JavaScript, and PHP—to implement the interactive and structural aspects of a site, connecting it to databases and enabling complex features. In short, design shapes the appearance and usability, while development powers the functionality and performance.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in ms
      once: false, // Only animate once on scroll
    });
  }, []);
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 my-5 slide-in" data-aos="fade-up"
    data-aos-delay={ 100}>
      <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-2"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-lg font-semibold">{item.question}</h2>
            <div className="text-xl">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
