"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const clinicGallery = [
  { src: "/clinic-gallery/entrance-corridor.jpg", alt: "Main building corridor leading to the clinic" },
  { src: "/clinic-gallery/clinic-entrance.jpg", alt: "Entrance door for Dr Bhatta General Practitioner rooms" },
  { src: "/clinic-gallery/reception-waiting-area.jpg", alt: "Clinic reception and patient seating area" },
  { src: "/clinic-gallery/reception-front-desk.jpg", alt: "Front desk view of the reception workspace" },
  { src: "/clinic-gallery/reception-workstation.jpg", alt: "Reception workstation and seating" },
  { src: "/clinic-gallery/consultation-room.jpg", alt: "Doctor consultation room" },
  { src: "/clinic-gallery/examination-room.jpg", alt: "Examination room with patient bed" },
];

export default function GalleryPage() {
  // Track which image is currently opened in full screen view
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-[#005eb8] hover:text-[#004a90]">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </Link>
        </nav>

        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Inside Our Clinic</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore our welcoming reception area, professional consultation rooms, and practical examination spaces where we care for our community.
          </p>
        </header>

        <section className="mt-12" aria-label="Clinic photo gallery">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicGallery.map((image) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-slate-600 font-medium transition-colors group-hover:text-[#005eb8]">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* Pop-up Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)} // Close modal when clicking dark backdrop
        >
          {/* Explicit Close Button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white focus:outline-none transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close interactive modal view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Full Image Container Viewport */}
          <div
            className="relative max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Crucial: prevents image clicks from bubbling up to backdrop
          >
            {/* Using standard img for fluid full-viewport scaling without stretching constraints */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Enlarged workspace clinic view"
              className="mx-auto max-h-[85vh] rounded-lg object-contain shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </main>
  );
}
