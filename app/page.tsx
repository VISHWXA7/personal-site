"use client"
import React from 'react'
import{ useState, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Buffer } from 'buffer';
import LetterGlitch from '@/components/LetterGlitch';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;


const page = () => {


    return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-8 mt-10">
          <h1 className="text-3xl sm:text-3xl font-bold mb-2 mt-16">hello, Vishwaa here</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            your average enjoyer becoming a software engineer.
          </p>
            <div className='mt-8'>
              <LetterGlitch
                  glitchSpeed={50}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                  glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
