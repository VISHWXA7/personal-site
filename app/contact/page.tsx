import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';

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

interface CallCardProps {
  duration: string;
  title: string;
  description: string;
  badge: string;
}

const CallCard: React.FC<CallCardProps> = ({ duration, title, description, badge }) => (
  <div className="p-6 rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 group cursor-pointer">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-white font-semibold text-xl">{title}</h3>
      <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-sm group-hover:bg-gray-700 group-hover:text-gray-300 transition-all duration-300">
        {badge}
      </span>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
      <span>Select this option</span>
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact</h1>
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
              icon={<MessageCircle size={24} />}
              title="Discord"
              subtitle="Join Server"
              href="#"
            />
          </div>
        </div>

        {/* Book a Call Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Call</h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a call with me if you need a more in-depth conversation about anything you want!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CallCard
              duration="15"
              title="15 Min Chat"
              description="Quick chat"
              badge="15 min"
            />
            <CallCard
              duration="30"
              title="30 Min Chat"
              description="Standard meeting"
              badge="30 min"
            />
            <CallCard
              duration="60"
              title="60 Min Chat"
              description="In-depth conversation"
              badge="60 min"
            />
          </div>
        </div>
      </div>
    </div>
  );
}