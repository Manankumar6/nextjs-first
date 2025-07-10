"use client";

import MovingCircle from "@/components/MovingCircle";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// Custom Accordion component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-gray-800 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 text-lg font-semibold text-gray-300 bg-gray-800 flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-300">{children}</div>}
    </div>
  );
};

const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 text-gray-300 leading-relaxed tracking-wide mt-24">
      {/* Hero Section */}
      <section className="text-center relative py-20 px-4 bg-indigo-600 dark:bg-background text-white overflow-hidden z-20">
        <div className="relative z-30">
          <MovingCircle count={8} />
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">
            Refund Policy
          </h1>
          <p
            className="mt-4 text-lg max-w-3xl text-center mx-auto slide-in animate-move"
            style={{ animationDelay: "0.2s" }}
          >
            We aim to provide exceptional service and maintain transparency in every step. Please
            review our refund policy before proceeding with any service.
          </p>
        </div>
        <div className="w-1/2 h-[31rem] rounded-full min-h-full bg-slate-700 absolute md:-right-20 -right-20 -top-16 md:-top-12 z-10 md:rotate-45 -rotate-45 animate-slide-in"></div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">Policy Overview</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-400">
          At TechCanva, our refund policy ensures fairness and clarity for all clients. We are
          dedicated to delivering top-notch services, but specific conditions govern refund
          eligibility. This guide outlines your rights and our commitments to you.
        </p>
      </section>

      {/* Refund Terms */}
      <section className="container mx-auto px-6 py-20 text-left">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">
          Key Refund Terms & Conditions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Accordion title="Advance Payment Policy">
            <p>
              An initial advance payment is required to start all projects. This payment becomes{" "}
              <span className="font-semibold text-red-500">non-refundable</span> once work begins,
              covering initial setup and resource allocation.
            </p>
          </Accordion>
          <Accordion title="Consultation Services">
            <p>
              We provide free consultations before any payment to discuss your project requirements.
              This ensures you can evaluate our services without cost before committing.
            </p>
          </Accordion>
          <Accordion title="Work Commencement">
            <p>
              Project work begins only after your advance payment is received. You’ll receive an
              email confirmation with a project timeline and key milestones.
            </p>
          </Accordion>
          <Accordion title="Technical Support Period">
            <p>
              Free technical support is available for <span className="font-semibold">1 year</span>{" "}
              from delivery. Beyond this, additional support or changes may incur fees based on
              complexity.
            </p>
          </Accordion>
          <Accordion title="Refund Eligibility Criteria">
            <p>
              Refunds are considered only in exceptional cases, such as:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Critical server issues impacting core website functionality.</li>
              <li>Major bugs caused by our code or deployment errors.</li>
              <li>Failure to meet agreed milestones due to our oversight.</li>
            </ul>
          </Accordion>
        </div>
      </section>

      {/* NEW: Refund Exceptions */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">Refund Exceptions</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold  mb-4">Customized Services</h3>
            <p className="text-gray-400">
              Services tailored specifically to client requirements are non-refundable due to their
              bespoke nature.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold  mb-4">Digital Deliverables</h3>
            <p className="text-gray-400">
              Once digital products or services have been delivered, they are not eligible for
              refunds.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold  mb-4">Delayed Requests</h3>
            <p className="text-gray-400">
              Refund requests made beyond the stipulated support period will not be entertained.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Refundable Scenarios */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">Non-Refundable Scenarios</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold  mb-4">Advance Payments</h3>
            <p className="text-gray-400">
              Advance payments are non-refundable once project work starts, reflecting initial
              efforts and resource use.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold  mb-4">Third-Party Costs</h3>
            <p className="text-gray-400">
              Payments for third-party services (e.g., hosting, APIs) are non-refundable, as they
              follow external policies.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold  mb-4">Post-Delivery Modifications</h3>
            <p className="text-gray-400">
              Requests for changes after delivery do not qualify for refunds but can be addressed
              through paid support.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Request Process */}
      <section className="bg-gray-800 dotted-background text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Refund Request Process</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            To request a refund, email us at{" "}
            <Link href="mailto:support@techcanva.in" className="underline font-semibold">
              support@techcanva.in
            </Link>{" "}
            with the following details:
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3 text-left max-w-4xl mx-auto">
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100 mr-4">1</span>
              <span>Service name and purchase date</span>
            </li>
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100 mr-4">2</span>
              <span>Reason for refund with supporting evidence (e.g., screenshots)</span>
            </li>
            <li className="flex items-start">
              <span className="text-3xl font-bold text-indigo-100 mr-4">3</span>
              <span>Documentation or error logs if applicable</span>
            </li>
          </ul>
          <Button
            variant="outline"
            className="mt-8 px-6 py-3 text-white border-white hover:bg-indigo-600 transition-colors"
          >
            Submit Request <ArrowRightIcon className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-500 py-4 slide-in">Refund Processing Timeline</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold  mb-4">Standard Processing</h3>
            <p className="text-gray-400">
              Approved refunds are processed within <strong>10-14 business days</strong>, subject to
              your bank or payment provider’s policies.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold  mb-4">Potential Delays</h3>
            <p className="text-gray-400">
              If further verification is needed, processing may extend beyond 14 days. We’ll notify
              you via email with updates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gray-800 dotted-background text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className=" text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Our team is here to assist. Contact us at{" "}
            <Link href="mailto:support@techcanva.in" className="underline font-semibold">
              support@techcanva.in
            </Link>{" "}
            or visit our{" "}
            <Link href="/contact" className="underline font-semibold">
              Contact Us
            </Link>{" "}
            page.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="mt-8 px-6 py-3 text-white border-white hover:bg-indigo-600 transition-colors"
            >
              Get in Touch <ArrowRightIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
