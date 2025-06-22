"use client";
import React from "react";
import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
    color: "from-blue-marguerite-500 to-blue-marguerite-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
    color: "from-blue-marguerite-600 to-blue-marguerite-700",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration tools and intuitive team management.",
    color: "from-blue-marguerite-400 to-blue-marguerite-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with comprehensive analytics and customizable reporting dashboards.",
    color: "from-blue-marguerite-700 to-blue-marguerite-800",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock expert support to help you succeed with dedicated customer success managers.",
    color: "from-blue-marguerite-500 to-blue-marguerite-600",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Scale globally with multi-region deployment and CDN integration for optimal performance worldwide.",
    color: "from-blue-marguerite-600 to-blue-marguerite-700",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-marguerite-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-marguerite-100 border border-blue-marguerite-200 rounded-full text-blue-marguerite-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-marguerite-950 mb-4 sm:mb-6 leading-tight">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-800 bg-clip-text text-transparent">
              succeed faster
            </span>
          </h2>
          <p className="text-base sm:text-lg text-blue-marguerite-700 max-w-2xl mx-auto px-4">
            Powerful features designed to streamline your workflow and boost
            productivity. Built for teams that demand excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-blue-marguerite-100 hover:border-blue-marguerite-200 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-marguerite-950 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-marguerite-700 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white mx-4 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Ready to transform your workflow?
          </h3>
          <p className="text-blue-marguerite-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of teams already using our platform to achieve their
            goals faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-marguerite-700 hover:bg-blue-marguerite-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl cursor-pointer"
            >
              Start Free Trial
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent text-white hover:bg-white cursor-pointer px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
