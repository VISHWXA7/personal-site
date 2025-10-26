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
    className="flex items-center gap-4 p-6 rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 group"
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
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10 mt-16">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-gray-400 text-xl">Let's connect.</p>
        </div>

        {/* Connect Section */}
        <div className="mb-16">
          <p className="text-gray-400 text-lg mb-8">
            Connect with me through any of these platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactCard
              icon={<Mail size={24} />}
              title="Email"
              subtitle="vishwaangl@gmail.com"
              href="mailto:vishwaangl@gmail.com"
            />
            <ContactCard
              icon={<Instagram size={24} />}
              title="Instagram"
              subtitle="@philllip.che"
              href="https://instagram.com/philllip.che"
            />
            <ContactCard
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              subtitle="in/phillipche"
              href="https://linkedin.com/in/phillipche"
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
              href="https://leetcode.com/u/user3668Tu/"
            />
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 mt-16">
          <h1 className="text-2xl font-bold mb-2">Gears. I use</h1>
        </div>

      </div>
    </div>
  );
}