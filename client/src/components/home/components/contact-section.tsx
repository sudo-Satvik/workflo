"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@workflo.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Ave, Suite 100",
      description: "San Francisco, CA 94105",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 6:00 PM PST",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-marguerite-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-marguerite-100 border border-blue-marguerite-200 rounded-full text-blue-marguerite-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-marguerite-950 mb-4 sm:mb-6 leading-tight">
            Let&apos;s start a
            <span className="block bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-800 bg-clip-text text-transparent">
              conversation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-blue-marguerite-700 max-w-2xl mx-auto px-4">
            Have questions or ready to get started? We&apos;d love to hear from
            you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-marguerite-100">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-marguerite-950 mb-6 sm:mb-8">
                Get in Touch
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-marguerite-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-marguerite-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-marguerite-950 mb-1 text-sm sm:text-base">
                          {info.title}
                        </h4>
                        <p className="text-blue-marguerite-700 font-medium mb-1 text-sm sm:text-base">
                          {info.details}
                        </p>
                        <p className="text-xs sm:text-sm text-blue-marguerite-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-blue-marguerite-200">
                <h4 className="font-semibold text-blue-marguerite-950 mb-3 sm:mb-4 text-sm sm:text-base">
                  Quick Actions
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-blue-marguerite-200 text-blue-marguerite-700 hover:bg-blue-marguerite-50 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-blue-marguerite-200 text-blue-marguerite-700 hover:bg-blue-marguerite-50 text-sm sm:text-base"
                  >
                    <Phone className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-marguerite-100">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-marguerite-950 mb-6 sm:mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-marguerite-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-marguerite-200 rounded-lg focus:ring-2 focus:ring-blue-marguerite-500 focus:border-blue-marguerite-500 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-marguerite-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-marguerite-200 rounded-lg focus:ring-2 focus:ring-blue-marguerite-500 focus:border-blue-marguerite-500 outline-none transition-colors text-sm sm:text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-marguerite-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-marguerite-200 rounded-lg focus:ring-2 focus:ring-blue-marguerite-500 focus:border-blue-marguerite-500 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-marguerite-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-marguerite-200 rounded-lg focus:ring-2 focus:ring-blue-marguerite-500 focus:border-blue-marguerite-500 outline-none transition-colors text-sm sm:text-base bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-blue-marguerite-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-blue-marguerite-200 rounded-lg focus:ring-2 focus:ring-blue-marguerite-500 focus:border-blue-marguerite-500 outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-blue-marguerite-600 hover:bg-blue-marguerite-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-marguerite-600 to-blue-marguerite-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to get started?
            </h3>
            <p className="text-blue-marguerite-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of teams already transforming their workflow. Start
              your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-marguerite-700 hover:bg-blue-marguerite-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
