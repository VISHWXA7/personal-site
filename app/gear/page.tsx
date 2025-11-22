import React from 'react'
import { gearitems } from '@/app/data/index';
import { ExternalLink } from 'lucide-react';

interface GearItem {
  name: string;
  description: string;
  image: string;
  link?: string;
}

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
          <h3 className=" text-sm font-semibold text-white mb-1">
            {item.name}
          </h3>
          <p className="text-gray-400 whitespace-pre-line text-xs leading-relaxed">
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


export default function GearPage() {
  
  return (
    <div className=" min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-xl mx-auto">
        
      {/* Gear Section */}
      <h2 className="text-3xl font-bold mt-10">Gear</h2>
      <p className="text-gray-400 text-xl mb-12">What I use.</p>
      
      {/*Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gearitems.map((item, index) => (
            <GearCard key={index} item={item} />
          ))}
        </div>
        

      </div>
    </div>
  );
}
