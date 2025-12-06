import React from 'react';
import {timeline, projects, hobbies } from '@/app/data/index';

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-xl mx-auto ">
      <h2 className="text-3xl font-bold mb-2 mt-10">About</h2>
      <p className="text-gray-400 text-xl mb-12">Who I am.</p>

        {/* Timeline Section */}
        <section className="mt-10 mb-20">
          <h2 className="text-3xl font-bold mb-10">Timeline</h2>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="border-l border-gray-700 pl-4">
                <div className='flex justify-between items-center'>
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                    <span className="text-gray-400 text-sm">{item.duration}</span>
                </div>
                <p className="text-gray-400">{item.role}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-800 mt-12"></div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>

          <div className="grid  grid-cols-1 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border border-gray-700 rounded-lg p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="border-t border-gray-700 my-4"></div>
                  <p className="text-gray-400 text-sm">
                    Tech stack: <span className="text-gray-300">{project.tech.join(", ")}</span>
                  </p>
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