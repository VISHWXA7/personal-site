import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

export default function Portfolio() {

  interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateImage: string;
  certificateUrl: string;
  topics: string[];
}
 
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

  const certifications: Certification[] = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "October 2024",
      certificateImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      certificateUrl: "https://aws.amazon.com/certification/",
      topics: [
        "Designing resilient architectures",
        "High-performing architectures",
        "Secure applications and architectures",
        "Cost-optimized architectures",
        "EC2, S3, RDS, Lambda services",
        "VPC and networking concepts"
      ]
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "June 2024",
      certificateImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      certificateUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      topics: [
        "HTML, CSS, and JavaScript fundamentals",
        "React and modern frameworks",
        "Version control with Git",
        "UI/UX design principles",
        "Responsive web design",
        "Advanced React patterns and hooks"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">

      
        {/* Timeline Section */}
        <section className="mb-24 mt-10">
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

        {/*Certification Section*/}
        <section>
          <h2 className="text-4xl font-bold mb-12">Certifications</h2>
         
          {/* Certifications List */}
          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                {/* Certificate Image - Left Side */}
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all duration-300 group-hover:border-gray-700 group-hover:scale-[1.02]">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto object-cover"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <ExternalLink className="mx-auto mb-2 text-white" size={32} />
                        <p className="text-white font-semibold">View Certificate</p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Course Details - Right Side */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                  </div>

                  {/* View Certificate Link */}
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold mt-6 group"
                  >
                    View Certificate
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 mt-24">Hobbies</h2>
          
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