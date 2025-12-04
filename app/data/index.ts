 import React from 'react';
 import { CarouselItem } from '@/components/Carousel';

  export const hobbies = [
    {
      title: "YouTube",
      description: "documenting my life as a software engineer",
      stat: "19 videos",
      statColor: "text-red-500",
    },
    {
      title: "Mechanical Keyboards",
      description: "fun but will be the reason why im homeless",
      stat: "3 custom keyboards",
      statColor: "text-purple-500"
    }
  ];

  export const timeline = [
    {
      company: "iAutomatia",
      role: "Software Engineer",
      duration: "2025 - Now",
      description: "working on large scale messaging systems",
      color: "bg-blue-500"
    },
    {
      company: "Thiyagam Women Trust",
      role: "Freelance Web Developer",
      duration: "2020 - 2024",
      description: "Redesign and built the NGO's new Website.",
      color: "bg-yellow-500"
    },
  ];

  // GEAR PAGE DATA

  export const gearitems = [
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

  export const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gear', href: '/gear' },
    { name: 'Contact', href: '/contact' },
  ];



// PROJECTS DATA
  export const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'SVKJKBVKJJVDJVSJKDK.',
    id: 1
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2
  }
];

export const PROJECT_TWO: CarouselItem[] = [
  {
    title: 'ABSTRACT',
    description: 'Cool text animations for your projects.',
    id: 1
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5
  }
];
