'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioData = {
     'Logo': [
        { id: 1, image: '/images/p2.webp' },
        { id: 2, image: '/images/rr.avif' },
        { id: 3, image: '/images/Agency-bg.png' },
        { id: 4, image: '/images/portfolio1.png' },
        { id: 5, image: '/images/Section1.png' },
        { id: 6, image: '/images/p3.webp' },
      ],
      'Website': [
        { id: 1, image: '/images/p2.webp' },
        { id: 2, image: '/images/rr.avif' },
        { id: 3, image: '/images/Agency-bg.png' },
        { id: 4, image: '/images/portfolio1.png' },
        { id: 5, image: '/images/Section1.png' },
        { id: 6, image: '/images/p3.webp' },
      ],
      'MobileApp': [
        { id: 1, image: '/images/p2.webp' },
        { id: 2, image: '/images/rr.avif' },
        { id: 3, image: '/images/Agency-bg.png' },
        { id: 4, image: '/images/portfolio1.png' },
        { id: 5, image: '/images/Section1.png' },
        { id: 6, image: '/images/p3.webp' },
      ],
      'ShopifyStore': [
        { id: 1, image: '/images/p2.webp' },
        { id: 2, image: '/images/rr.avif' },
        { id: 3, image: '/images/Agency-bg.png' },
        { id: 4, image: '/images/portfolio1.png' },
        { id: 5, image: '/images/Section1.png' },
        { id: 6, image: '/images/p3.webp' },
      ],
};

const tabs = ['Logo', 'Website', 'MobileApp', 'ShopifyStore'];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Logo');

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-[48px] font-bold title-font mb-4 text-black">Portfolio</h2>
      </div>
<div className="flex justify-center p-2">
      <div className="md:space-x-4 mb-8 max-w-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 md:px-6 px-3 rounded-full font-semibold transition-colors ${
              activeTab === tab ? 'border border-[#41C1BA] text-[#41C1BA]' : 'border border-[#848484] text-[#848484]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
</div>
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData[activeTab]?.map((item) => (
                <motion.div
                  key={item.id}
                  className="rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.image}
                    alt={`Portfolio ${item.id}`}
                    className="w-md h-md object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
