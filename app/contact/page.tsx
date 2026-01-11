import React from 'react';
import { Mail, Linkedin, Instagram, CodeIcon, GithubIcon } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, subtitle, href }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-6 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 group"
  >
    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-white font-medium text-lg">{title}</span>
      <span className="text-gray-400 text-sm">{subtitle}</span>
    </div>
  </a>
);

export default function ContactPage() {
  
  return (
    <div className="bg-black text-white p-6 md:p-12 min-h-screen py-16">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-10 mt-10">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-gray-400">Let's connect.</p>
        </div>

        {/* Connect Section */}
          <div className="grid grid-cols-1 gap-4">
            <ContactCard
              icon={<Mail size={24} />}
              title="Email"
              subtitle="vishwaangl@gmail.com"
              href="mailto:vishwaangl@gmail.com"
            />
            <ContactCard
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              subtitle="in/vishwaa7"
              href="https://www.linkedin.com/in/vishwaa7"
            />
            <ContactCard
              icon={<CodeIcon size={24} />}
              title="Leetcode"
              subtitle="See my coding profile"
              href="https://leetcode.com/u/user3668Tu/"
            />
            <ContactCard
              icon={<GithubIcon size={24} />}
              title="GitHub"
              subtitle="See my Repos"
              href="https://github.com/VISHWXA7"
            />
          </div>
      </div>
    </div>
  );
}