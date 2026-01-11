"use client"
import React from 'react'
import{ useState, useEffect } from 'react';

import LetterGlitch from '@/components/LetterGlitch';
import ScrollVelocity from '@/components/ScrollVelocity';
import TiltedCard from '@/components/TiltedCard';


const page = () => {


    return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 px-6 py-16">
      <div className="max-w-xl mx-auto">
        <div >
          <h1 className="text-3xl sm:text-3xl font-bold mb-2 mt-12">hello, Vishwaa here</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Junior Software Engineer.
          </p>
            <div className='mt-8 rounded-2xl'>
              <LetterGlitch
                  glitchSpeed={50}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                  glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
                />
            </div>
            <div className='mt-10'>
              <ScrollVelocity
                texts={['Welcome', 'To My Site']} 
                velocity={100} 
                className="custom-scroll-text"
              />
            </div>
            <div className='mt-10 flex justify-center'>
              <TiltedCard
                  imageSrc="img1.jpg"
                  altText="img1"
                  captionText="Sky Cracker"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="text-white font-bold relative inline-block">
                      Capture of the Month
                    </p>
                  }
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
