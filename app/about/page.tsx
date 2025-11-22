import React from 'react';
import { projects, timeline, hobbies } from '@/app/data/index';

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 mt-10">About</h2>
      <p className="text-gray-400 text-xl mb-12">Who I am.</p>

        {/* Timeline Section */}
        <section className="mb-24 mt-10">
          <h2 className="text-3xl font-bold mb-12">Timeline</h2>
          <div className="relative border-l-2 border-gray-800 pl-8 space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative">

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{item.company}</h3>
                    <p className="text-gray-400 italic">{item.role}</p>
                  </div> 
                </div>
                <p className="text-gray-300">• {item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, i) => (
              <div key={i} className="border-b border-gray-800 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-justify">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end ml-8">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`${tag.color} px-4 py-1 rounded-full text-sm font-medium`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        {<section>
          <h2 className="text-3xl font-bold mb-12 mt-24">Hobbies</h2>
          
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {hobbies.map((hobby, i) => (
              <div key={i} className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-gray-400 mb-4">{hobby.description}</p>
                <p className={`${hobby.statColor} font-medium`}>{hobby.stat}</p>
              </div>
            ))}
          </div>
        </section>}

        
      </div>
    </div>
  );
}