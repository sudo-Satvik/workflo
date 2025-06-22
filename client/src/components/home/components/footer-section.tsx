"use client";
import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const FooterSection = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "API", href: "#" },
      { name: "Security", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Community", href: "#" },
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Status", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@workflo.com" },
  ];

  return (
    <footer className="bg-blue-marguerite-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">Workflo</h3>
              <p className="text-blue-marguerite-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Transform your workflow with powerful tools designed for modern
                teams. Streamline productivity and boost collaboration
                effortlessly.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-marguerite-800 hover:bg-blue-marguerite-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-blue-marguerite-100">
                {category}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-marguerite-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-blue-marguerite-800 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Stay Updated
            </h4>
            <p className="text-blue-marguerite-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Get the latest product updates and industry insights delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-blue-marguerite-800 border border-blue-marguerite-700 rounded-lg text-white placeholder-blue-marguerite-400 focus:outline-none focus:ring-2 focus:ring-blue-marguerite-500 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-marguerite-600 hover:bg-blue-marguerite-500 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-marguerite-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-blue-marguerite-300 text-sm sm:text-base text-center sm:text-left">
            <span>© 2024 Workflo. Made with</span>
            <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 fill-current" />
            <span>in San Francisco</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-marguerite-300">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
