"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "David Kim",
    role: "Engineering Lead",
    company: "BuildTech",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=100&h=100",
    content:
      "The integration capabilities are outstanding. We've connected all our tools seamlessly, creating a unified workflow that saves us hours every week.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Scale Ventures",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=100&h=100",
    content:
      "The customer support is exceptional. Every question is answered quickly and thoroughly. It's clear they truly care about their users' success.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "NextGen Solutions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
    content:
      "We've tried many solutions, but nothing comes close to this platform. It's powerful yet simple, comprehensive yet focused. Absolutely game-changing.",
    rating: 5,
  },
];

const companies = [
  "TechStart",
  "Innovation Labs",
  "Creative Studio",
  "BuildTech",
  "Scale Ventures",
  "NextGen Solutions",
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-marguerite-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-marguerite-100 border border-blue-marguerite-200 rounded-full text-blue-marguerite-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-marguerite-950 mb-4 sm:mb-6 leading-tight">
            Loved by teams
            <span className="block bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-800 bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-base sm:text-lg text-blue-marguerite-700 max-w-2xl mx-auto px-4">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-blue-marguerite-100 hover:border-blue-marguerite-200 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="relative mb-4 sm:mb-6">
                <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-blue-marguerite-300 absolute -top-1 sm:-top-2 -left-1 sm:-left-2" />
                <p className="text-blue-marguerite-700 leading-relaxed pl-4 sm:pl-6 text-sm sm:text-base">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="font-semibold text-blue-marguerite-950 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-marguerite-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-marguerite-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-blue-marguerite-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-blue-marguerite-200"
              >
                <span className="text-blue-marguerite-700 font-semibold text-sm sm:text-base">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center mx-4 sm:mx-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                50,000+
              </div>
              <div className="text-blue-marguerite-200 text-xs sm:text-sm lg:text-base">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                99.9%
              </div>
              <div className="text-blue-marguerite-200 text-xs sm:text-sm lg:text-base">
                Uptime SLA
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                4.9/5
              </div>
              <div className="text-blue-marguerite-200 text-xs sm:text-sm lg:text-base">
                Customer Rating
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-blue-marguerite-200 text-xs sm:text-sm lg:text-base">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
