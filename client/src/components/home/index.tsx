"use client";
import React from "react";
import { NavbarComponent } from "../common/navbar";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import PricingSection from "./components/pricing-section";
import TestimonialsSection from "./components/testimonials-section";
import ContactSection from "./components/contact-section";
import FooterSection from "./components/footer-section";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="pt-0">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
