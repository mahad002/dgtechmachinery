import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Users, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Industry Excellence',
    description: '25+ years of excellence'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always here to help'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'ISO certified quality'
  }
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  console.log(inView);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=2000"
          alt="Background"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-industrial-primary dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-industrial-primary/80 dark:text-gray-300">
            Your trusted partner in industrial innovation
          </p>
          <p className="text-lg md:text-xl text-industrial-primary/80 dark:text-gray-300">Your trusted partner</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-industrial-primary rounded-xl p-6 shadow-xl transform transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-industrial-secondary hover:bg-industrial-hover transition-colors duration-300 rounded-full flex items-center justify-center mb-4">
                  {React.createElement(reason.icon, {
                    className: "w-8 h-8 text-white"
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-industrial-primary dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-industrial-primary/80 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}