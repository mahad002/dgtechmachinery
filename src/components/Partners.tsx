import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ArrowRight } from 'lucide-react';

const partners = [
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/Frame-43.webp', name: 'Partner 1' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/Frame-89.webp', name: 'Partner 2' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1554.webp', name: 'Partner 3' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1566.webp', name: 'Partner 4' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1578.webp', name: 'Partner 5' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1608.webp', name: 'Partner 6' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1628.webp', name: 'Partner 7' },
  { url: 'https://dgtechmachinery.com/wp-content/uploads/2024/11/g1640.webp', name: 'Partner 8' },
];

const services = [
  {
    title: 'Equipment Financing',
    description: 'Flexible financing options and leasing solutions for your industrial machinery investments',
    link: 'VIEW FINANCING OPTIONS'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored machinery configurations and custom manufacturing solutions for specific industry needs',
    link: 'EXPLORE SOLUTIONS'
  },
  {
    title: 'Technical Support',
    description: 'Expert technical assistance and preventive maintenance services to maximize equipment uptime',
    link: 'SERVICE LOCATIONS'
  },
  {
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty packages and extended service plans for your machinery investments',
    link: 'WARRANTY DETAILS'
  }
];

export default function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  console.log(inView);

  return (
    <section ref={ref} id="partners" className="relative bg-white dark:bg-gray-900 py-20 rounded-b-3xl overflow-hidden">
      <div className="absolute inset-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-industrial-secondary hover:text-industrial-hover transition-colors">
                {service.link} <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 py-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.url}
                alt={partner.name}
                className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all transform hover:scale-110 duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}