import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box } from 'lucide-react';

const products = [
  'Automobile Parts',
  'Plastic Liquor Bottle',
  'Jar Caps',
  'Pipe & Fitting',
  'Medical Plastic Parts',
  'Automotive Plastic Parts'
];

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  return (
    <section ref={ref} className="py-20 relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-industrial-primary dark:text-white mb-6">
              About the Company
            </h2>
            <h3 className="text-2xl font-semibold text-industrial-secondary mb-6">
              Ultimate Experiences With Premium Technology Services
            </h3>
            <p className="text-industrial-primary/80 dark:text-gray-300 mb-8 leading-relaxed">
              At DG Tech Machinery, our 360-degree solutions include seamless, tailored machinery installation. 
              Our expert team ensures efficient setup to maximize your productivity. Unlock the potential to 
              produce bespoke, high-quality products with our guidance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={product}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <Box className="w-5 h-5 text-industrial-secondary" />
                  <span className="text-industrial-primary dark:text-gray-300">{product}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?auto=format&fit=crop&q=80&w=1200"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-industrial-secondary rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-industrial-primary rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}