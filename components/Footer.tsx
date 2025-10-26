import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';


const Footer = () => {

    const currentYear = new Date().getFullYear();
    const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mb-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {currentYear} Vishwaa.  All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;