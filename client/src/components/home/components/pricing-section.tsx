"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: 9, yearly: 7 },
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Standard templates",
      "Mobile app access",
    ],
    popular: false,
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: { monthly: 29, yearly: 24 },
    description: "Ideal for growing teams that need advanced features",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
      "API access",
      "Advanced integrations",
      "Team collaboration tools",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 79 },
    description: "For large organizations with custom requirements",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Enterprise analytics",
      "24/7 phone support",
      "White-label solution",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security",
      "Custom training",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-marguerite-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-marguerite-100 border border-blue-marguerite-200 rounded-full text-blue-marguerite-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-marguerite-950 mb-4 sm:mb-6 leading-tight">
            Simple, transparent
            <span className="block bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-800 bg-clip-text text-transparent">
              pricing for everyone
            </span>
          </h2>
          <p className="text-base sm:text-lg text-blue-marguerite-700 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Choose the perfect plan for your needs. All plans include our core
            features with a 14-day free trial. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-blue-marguerite-100 rounded-full p-1 border border-blue-marguerite-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-white text-blue-marguerite-700 shadow-sm"
                  : "text-blue-marguerite-600 hover:text-blue-marguerite-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all relative ${
                isYearly
                  ? "bg-white text-blue-marguerite-700 shadow-sm"
                  : "text-blue-marguerite-600 hover:text-blue-marguerite-700"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-blue-marguerite-600 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-blue-marguerite-300 ring-2 ring-blue-marguerite-200"
                  : "border-blue-marguerite-100 hover:border-blue-marguerite-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-marguerite-950 mb-2">
                  {plan.name}
                </h3>
                <p className="text-blue-marguerite-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-marguerite-950">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-blue-marguerite-600 text-base sm:text-lg">
                    /month
                  </span>
                </div>
                {isYearly && (
                  <p className="text-xs sm:text-sm text-blue-marguerite-600">
                    Billed annually (${plan.price.yearly * 12}/year)
                  </p>
                )}
              </div>

              <Button
                size="lg"
                className={`w-full mb-6 sm:mb-8 ${
                  plan.popular
                    ? "bg-blue-marguerite-600 hover:bg-blue-marguerite-700 text-white"
                    : "bg-blue-marguerite-100 hover:bg-blue-marguerite-200 text-blue-marguerite-700 border border-blue-marguerite-300"
                }`}
              >
                {plan.buttonText}
                {plan.buttonText !== "Contact Sales" && (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>

              <ul className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-marguerite-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-blue-marguerite-600" />
                    </div>
                    <span className="text-blue-marguerite-700 text-xs sm:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-blue-marguerite-600 mb-4 text-sm sm:text-base">
            Need a custom plan? We&apos;re here to help.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-marguerite-300 text-blue-marguerite-700 hover:bg-blue-marguerite-50"
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
