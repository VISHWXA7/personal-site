import React from 'react';

export default function Portfolio() {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  ];

  const timeline = [
    {
      company: "Amazon",
      role: "Software Development Engineer",
      duration: "2024 - Now",
      description: "working on large scale messaging systems",
      color: "bg-blue-500"
    },
    {
      company: "California State Polytechnic University, Pomona",
      role: "B.S. Computer Science",
      duration: "2020 - 2024",
      description: "got my degree to make my parents proud",
      color: "bg-yellow-500"
    },
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      duration: "2023 - 2023",
      description: "worked on amazon fresh grocery experience",
      color: "bg-green-500"
    },
    {
      company: "Solace Notify",
      role: "Founder",
      duration: "2019 - 2023",
      description: "built reselling community and developed tools",
      color: "bg-red-500"
    }
  ];

  const projects = [
    {
      name: "Cypher Chat",
      description: "Secure client-server chat web app enabling real-time and private communication.",
      tags: [
        { name: "TypeScript", color: "bg-blue-500" },
        { name: "React", color: "bg-cyan-500" },
        { name: "Next.js", color: "bg-gray-600" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "Express.js", color: "bg-yellow-600" },
        { name: "AWS", color: "bg-orange-500" }
      ]
    },
    {
      name: "Sole Exchange",
      description: "Forum that allows users to post, interact, and search about anything sneaker related..",
      tags: [
        { name: "React", color: "bg-cyan-500" },
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "Supabase", color: "bg-teal-500" }
      ]
    },
    {
      name: "Spotify Data Dashboard",
      description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
      tags: [
        { name: "React", color: "bg-cyan-500" },
        { name: "Spotify API", color: "bg-green-600" },
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "Node.js", color: "bg-green-500" }
      ]
    }
  ];

  const hobbies = [
    {
      title: "YouTube",
      description: "documenting my life as a software engineer",
      stat: "19 videos",
      statColor: "text-red-500"
    },
    {
      title: "Real Estate Investing",
      description: "playing monopoly but with real money",
      stat: "0 properties",
      statColor: "text-blue-500"
    },
    {
      title: "Stocks and Crypto",
      description: "buying high and selling low is my philosophy",
      stat: "-$25,000 profit",
      statColor: "text-green-500"
    },
    {
      title: "Mechanical Keyboards",
      description: "fun but will be the reason why im homeless",
      stat: "3 custom keyboards",
      statColor: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">

        
        {/* About Section */}
        <section className="mb-24">
          <h1 className="text-6xl font-bold mb-4 mt-10">About</h1>
          <p className="text-2xl text-gray-400 mb-12">Who I am.</p>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Photo ${i + 1}`}
                className="w-80 h-80 object-cover rounded-3xl flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform"
                style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 2}deg)` }}
              />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12">Timeline</h2>
          
          <div className="relative border-l-2 border-gray-800 pl-8 space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[37px] w-4 h-4 ${item.color} rounded-full`}></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{item.company}</h3>
                    <p className="text-gray-400 italic">{item.role}</p>
                  </div>
                  <span className="text-gray-400">{item.duration}</span>
                </div>
                <p className="text-gray-300">• {item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, i) => (
              <div key={i} className="border-b border-gray-800 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-400">{project.description}</p>
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
        <section>
          <h2 className="text-4xl font-bold mb-12">Hobbies</h2>
          
          <div className="grid grid-cols-2 gap-8">
            {hobbies.map((hobby, i) => (
              <div key={i} className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-gray-400 mb-4">{hobby.description}</p>
                <p className={`${hobby.statColor} font-medium`}>{hobby.stat}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}