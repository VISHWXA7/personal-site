"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  location?: string;
  date?: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Sample images - replace with your vacation photos
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      alt: "Mountain landscape",
      location: "Swiss Alps",
      date: "Summer 2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
      alt: "Beach sunset",
      location: "Maldives",
      date: "Winter 2024"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700",
      alt: "Desert dunes",
      location: "Dubai",
      date: "Spring 2024"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
      alt: "Tropical beach",
      location: "Bali",
      date: "Fall 2023"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
      alt: "Mountain peak",
      location: "Himalayas",
      date: "Summer 2023"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      alt: "Forest path",
      location: "Norway",
      date: "Autumn 2023"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=700",
      alt: "Sunset over water",
      location: "Santorini",
      date: "Summer 2024"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      alt: "Mountain vista",
      location: "Patagonia",
      date: "Winter 2023"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      alt: "Nature trail",
      location: "New Zealand",
      date: "Spring 2024"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=700",
      alt: "Coastal cliffs",
      location: "Iceland",
      date: "Summer 2023"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600",
      alt: "Misty mountains",
      location: "Scotland",
      date: "Fall 2023"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900",
      alt: "Wilderness",
      location: "Canada",
      date: "Summer 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-10">
          <h1 className="text-4xl md:text-4xl font-bold mb-2">Gallery</h1>
          <p className="text-gray-400 text-xl">Moments captured from my travels.</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {image.location && (
                      <p className="text-white font-semibold text-lg">{image.location}</p>
                    )}
                    {image.date && (
                      <p className="text-gray-300 text-sm">{image.date}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              {(selectedImage.location || selectedImage.date) && (
                <div className="mt-6 text-center">
                  {selectedImage.location && (
                    <p className="text-white text-2xl font-semibold mb-1">
                      {selectedImage.location}
                    </p>
                  )}
                  {selectedImage.date && (
                    <p className="text-gray-400 text-lg">{selectedImage.date}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}