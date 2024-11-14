'use client'
import React, { useState } from 'react';

// Dynamically import Framer Motion to prevent SSR issues
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Graphic Designing",
    description: "Crafting visual communication that captivates and communicates messages effectively.",
    image: "/images/icon.svg",
    bgColor: 'bg-teal-500',
  },
  {
    id: 2,
    title: "UI / UX Designing",
    description: "Crafting visual communication that captivates and communicates messages effectively.",
    image: "/images/Service2.png",
    bgColor: 'bg-purple-500',
  },
  {
    id: 3,
    title: "Website Development",
    description: "Crafting visual communication that captivates and communicates messages effectively.",
    image: "/images/Service3.png",
    bgColor: 'bg-blue-500',
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Crafting visual communication that captivates and communicates messages effectively.",
    image: "/images/Service4.png",
    bgColor: 'bg-red-500',
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Optimizing websites to rank higher in search engines and drive organic traffic.",
    image: "/images/Section1.png",
    bgColor: 'bg-green-500',
  },
  {
    id: 6,
    title: "Content Creation",
    description: "Creating compelling content to engage and inform audiences.",
    image: "/images/Section2.png",
    bgColor: 'bg-yellow-500',
  },
  {
    id: 7,
    title: "SEO Optimization",
    description: "Optimizing websites to rank higher in search engines and drive organic traffic.",
    image: "/images/Section1.png",
    bgColor: 'bg-green-500',
  },
  {
    id: 8,
    title: "Content Creation",
    description: "Creating compelling content to engage and inform audiences.",
    image: "/images/Section4.png",
    bgColor: 'bg-yellow-500',
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 4 services at a time
  const servicesToShow = services.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 4 < services.length ? prev + 4 : 0 // Loop back to the start if the index goes out of bounds
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 4 >= 0 ? prev - 4 : services.length - 4 // Loop back to the end if the index goes below 0
    );
  };

  return (
    <section className="py-24 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-[48px] font-bold title-font mb-4 text-black">Our Services</h1>
        <p className="lg:w-2/3 mx-auto text-[#9B9B9B]">We Are A Premium Agency That Focus On Quality</p>
      </div>

      <div className="relative flex justify-center items-center py-10 px-4">
        <div className="flex justify-center max-w-7xl space-x-4">
          {servicesToShow.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-[280px] md:w-[360px] lg:w-[360px]"
            >
              <div
                className={`w-[360px] md:h-[360px] px-8 py-12 rounded-lg shadow-lg text-black hover:bg-[url('/images/service.png')] bg-cover bg-center`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-16 w-16 mb-4"
                />
                <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                <p className="leading-relaxed text-[#848484]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center items-center mt-8">
        <div className="bg-[#41C1BA] w-44 space-x-4 flex justify-center rounded-full p-4">
          <button
            onClick={handlePrev}
            className="text-5xl font-medium"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="text-5xl font-medium"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
