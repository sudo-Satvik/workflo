"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import VideoModal from "../../ui/video-modal";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-marguerite-50 via-blue-marguerite-100/50 to-blue-marguerite-200/30" />

      {/* Decorative elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-marguerite-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-marguerite-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-marguerite-100 border border-blue-marguerite-200 rounded-full text-blue-marguerite-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up cursor-default">
          <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
          <span className="whitespace-nowrap">
            Trusted by 10,000+ professionals
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-marguerite-950 mb-4 sm:mb-6 animate-fade-in-up delay-200 cursor-default leading-tight">
          Transform Your
          <span className="block bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-800 bg-clip-text text-transparent">
            Workflow Today
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-blue-marguerite-700 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up delay-400 px-4">
          Streamline your productivity with our powerful tools designed for
          modern teams. Experience seamless collaboration and boost your
          efficiency like never before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 animate-fade-in-up delay-600 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-marguerite-600 hover:bg-blue-marguerite-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Get Started Free
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleWatchDemo}
            className="w-full sm:w-auto border-blue-marguerite-300 text-blue-marguerite-700 hover:bg-blue-marguerite-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold cursor-pointer"
          >
            <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in-up delay-800 px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-marguerite-800">
              99.9%
            </div>
            <div className="text-blue-marguerite-600 text-sm">Uptime</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-blue-marguerite-300" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-marguerite-800">
              50K+
            </div>
            <div className="text-blue-marguerite-600 text-sm">Active Users</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-blue-marguerite-300" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-marguerite-800">
              4.9/5
            </div>
            <div className="text-blue-marguerite-600 text-sm">User Rating</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        title="See How Workflo Works"
      />
    </section>
  );
};

export default HeroSection;
