'use client';
import MovingCircle from '@/components/MovingCircle';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const headingClass =
  'text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mt-24">
      {/* Hero Section */}
      <section className="text-center relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
        <div className="relative z-30">
          <MovingCircle count={8} />
          <h1 className={headingClass}>Privacy Policy</h1>
          <p
            className="mt-4 text-lg max-w-3xl text-center mx-auto slide-in animate-move"
            style={{ animationDelay: '0.2s' }}
          >
            Your privacy matters. At TechCanva, we are dedicated to protecting your personal data with the highest level of integrity and transparency.
          </p>
        </div>
        <div className="w-1/2 h-[31rem] rounded-full min-h-full bg-slate-700 absolute md:-right-20 -right-20 -top-16 md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in"></div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Introduction</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          At TechCanva, we understand the importance of privacy in the digital world. This Privacy Policy explains how we collect, use, and protect your data when you interact with our services, whether you're browsing our site, making purchases, or subscribing to our newsletter. We are a professional web services provider, and your trust is our top priority.
        </p>
      </section>

      {/* Information Collection */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Information Collection</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          We collect personal and non-personal data to provide seamless and secure services. The types of data include:
        </p>
        <ul className="mt-6 list-none list-inside text-left max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400 space-y-2">
          <li>✅ Name, email address, phone number, and other contact details you provide voluntarily.</li>
          <li>✅ Browsing history, device information, and IP addresses through cookies and analytics tools.</li>
          <li>✅ Payment and transaction data when you make purchases on our platform.</li>
          <li>✅ Interaction records such as support queries, feedback, or communication history.</li>
        </ul>
      </section>

      {/* Use of Information */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Use of Information</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          We use your information responsibly to deliver high-quality, secure digital experiences. Here's how:
        </p>
        <ul className="mt-6 list-none text-left list-inside max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400 space-y-2">
          <li>✔️ To provide, maintain, and improve our products and services.</li>
          <li>✔️ To personalize content, recommendations, and user experience.</li>
          <li>✔️ To process payments securely and manage billing records.</li>
          <li>✔️ To communicate updates, offers, and important notices via email or SMS (opt-out anytime).</li>
          <li>✔️ To comply with legal requirements and protect against fraud or abuse.</li>
        </ul>
      </section>

      {/* Data Storage & Protection */}
      <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className={headingClass}>Data Security & Storage</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            We use both SQL and NoSQL databases hosted on secure cloud infrastructures with end-to-end encryption, access controls, and multi-layered firewalls. Regular security audits and encrypted backups are in place to safeguard data from unauthorized access or leaks.
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Our systems are built with industry-leading technologies, ensuring your personal information is protected whether stored temporarily or long-term.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Your Rights</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="bg-white dark:bg-background dotted-background p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              You have full control over your personal data. At any time, you can request access to the information we store, ask for corrections, or delete your data entirely. We comply with GDPR and other privacy regulations.
            </p>
            <p className="mt-4 font-semibold">Right to Access & Erasure</p>
          </div>
          <div className="bg-white dark:bg-background dotted-background p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              You can opt out of marketing emails or restrict how we use your data for analytics and targeting purposes. Your preferences are respected, and we provide clear options to manage them.
            </p>
            <p className="mt-4 font-semibold">Communication & Data Usage Control</p>
          </div>
        </div>
      </section>

      {/* Cookies & Tracking */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Cookies & Tracking Technologies</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          Our site uses cookies and similar technologies to analyze usage patterns, personalize content, and enhance your experience. You can control cookie preferences in your browser settings or opt out where applicable.
        </p>
      </section>

      {/* Third-Party Sharing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className={headingClass}>Third-Party Services</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
          We do not sell or rent your personal data. However, we may share data with trusted partners and third-party service providers (e.g., payment gateways, cloud hosting, analytics tools) who assist in delivering our services—always under strict confidentiality agreements.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-700 dark:bg-background dotted-background text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className={headingClass}>Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            If you have any questions about this Privacy Policy or your data, please contact us at <Link href="mailto:support@techcanva.in" className="underline">support@techcanva.in</Link>. We're happy to help and value transparency.
          </p>
          <Link href="/contact">
            <Button type="button" variant={'outline'} className="px-3 py-5 mt-5">
              Contact Now
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
