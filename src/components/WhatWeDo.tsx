import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Factory, Cog, Wrench, Truck } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: 'Manufacturing Solutions',
    description: 'State-of-the-art machinery for modern manufacturing needs'
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Smart automation solutions to optimize your production'
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'Comprehensive maintenance and support programs'
  },
  {
    icon: Truck,
    title: 'Logistics Integration',
    description: 'End-to-end logistics solutions for your business'
  }
];

export default function WhatWeDo() {
  // Changed to use separate refs for the header and items section
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [itemsRef, itemsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        {/* Use a placeholder image instead of unsplash URL */}
        <div className="w-full h-full bg-gray-100 opacity-10 dark:opacity-5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-industrial-primary dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-industrial-primary/80 dark:text-gray-300">
            Comprehensive industrial solutions for your business
          </p>
        </motion.div>
        
        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={itemsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-industrial-light dark:bg-industrial-primary rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {React.createElement(service.icon, {
                  className: "w-12 h-12 text-industrial-secondary mb-4"
                })}
                <h3 className="text-xl font-semibold mb-2 text-industrial-primary dark:text-white">
                  {service.title}
                </h3>
                <p className="text-industrial-primary/80 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}