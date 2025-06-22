"use client";
import React from "react";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Users",
      description: "Growing community worldwide",
      color: "from-blue-marguerite-500 to-blue-marguerite-600",
    },
    {
      icon: Globe,
      number: "180+",
      label: "Countries",
      description: "Global reach and impact",
      color: "from-blue-marguerite-600 to-blue-marguerite-700",
    },
    {
      icon: TrendingUp,
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service guarantee",
      color: "from-blue-marguerite-400 to-blue-marguerite-500",
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards",
      description: "Industry recognition",
      color: "from-blue-marguerite-700 to-blue-marguerite-800",
    },
  ];

  return (
    <section className="py-16 bg-blue-marguerite-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-blue-marguerite-950 mb-2">
                  {stat.number}
                </div>

                <div className="text-lg font-semibold text-blue-marguerite-800 mb-1">
                  {stat.label}
                </div>

                <div className="text-sm text-blue-marguerite-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
