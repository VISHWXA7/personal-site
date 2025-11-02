import React from 'react';
import { Mail, Linkedin, Instagram, CodeIcon, GithubIcon, ExternalLink } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

interface GearItem {
  name: string;
  description: string;
  image: string;
  link?: string;
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

const GearCard = ({ item }: { item: GearItem }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1">
      <div className="flex items-start gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">
            {item.name}
          </h3>
          <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        {item.link && (
          <a 
            href={item.link}
            className="text-gray-500 hover:text-gray-300 transition-colors mt-1"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  const deskItems: GearItem[] = [
    {
      name: "MacBook Pro 16\"",
      description: "Space Black\nM3 Max, 48GB RAM, 1TB SSD",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      name: "GIGABYTE M27QX",
      description: "27\" 240Hz Gaming Monitor",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      name: "Standing Desk",
      description: "Flexispot EC3/EC4",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      name: "Steelcase Leap V2",
      description: "Ergonomic Office Chair",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  const pcItems: GearItem[] = [
    {
      name: "AMD Ryzen 7 7800X3D",
      description: "8-Core CPU",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      name: "ASUS DUAL OC RTX 4070",
      description: "Graphics Card",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      name: "Lian Li A4-H20",
      description: "Mini ITX Case",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 mt-10">
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
              href="https://github.com/yourusername"
            />
          </div>
        </div>

        {/* Gear Section */}
        <div className="mb-16 mt-24">
          <h2 className="text-4xl font-bold mb-2">Gear</h2>
          <p className="text-gray-400 text-xl mb-12">What I use.</p>
          
          {/* Desk Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Desk</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deskItems.map((item, index) => (
                <GearCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* PC Build Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">PC Build</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pcItems.map((item, index) => (
                <GearCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}