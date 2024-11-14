'use client'
import React, { useState } from 'react';
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
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many services to show based on screen size
  const getVisibleServicesCount = () => {
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // small screens
  };

  const [visibleServicesCount, setVisibleServicesCount] = useState(getVisibleServicesCount());

  // Update the number of visible services on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleServicesCount(getVisibleServicesCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Math.ceil(services.length / visibleServicesCount) - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(services.length / visibleServicesCount) - 1 : prev - 1
    );
  };

  const currentServices = services.slice(
    currentIndex * visibleServicesCount,
    currentIndex * visibleServicesCount + visibleServicesCount
  );

  return (
    <section className="py-24 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-[48px] font-bold title-font mb-4 text-black">Our Services</h1>
        <p className="lg:w-2/3 mx-auto text-[#9B9B9B]">We Are A Premium Agency That Focus On Quality</p>
      </div>

      <div className="relative flex justify-center items-center py-10 px-4">
       

        <div className="flex justify-center max-w-lg space-x-4">
          {currentServices.map((service, index) => (
            <AnimatePresence key={service.id}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`w-full md:w-1/${visibleServicesCount}`}
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
            </AnimatePresence>
          ))}
        </div>
      
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center mt-8 ">
        <div className='bg-[#41C1BA] w-44 space-x-4 flex justify-center rounded-full p-4'>
         <button
          onClick={handlePrev}
          className="text-5xl font-medium"
        >
          {"<"}
        </button>
        <span className="text-xl flex items-center">
          {currentIndex + 1} / {Math.ceil(services.length / visibleServicesCount)}
        </span>
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
