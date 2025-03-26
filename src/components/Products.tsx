import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    title: 'Injection Molding Machines',
    image: 'https://dgtechmachinery.com/wp-content/uploads/2024/08/Untitled-1.webp',
    hoverImage: 'https://dgtechmachinery.com/wp-content/uploads/2024/08/DG-Tech-Product-Images-12.webp',
    description: 'Advanced injection molding solutions for precise manufacturing needs.',
    specs: ['Clamping Force: 50-3000T', 'Shot Weight: 50-15000g', 'Energy Efficient']
  },
  {
    title: 'Extrusion Equipment',
    image: 'https://dgtechmachinery.com/wp-content/uploads/2024/08/DG-Tech-Product-Images-12.webp',
    hoverImage: 'https://dgtechmachinery.com/wp-content/uploads/2024/10/TJ-HB%E7%B3%BB%E5%88%97%E5%8D%95%E5%B7%A5%E4%BD%8D%E4%B8%AD%E7%A9%BA%E5%90%B9%E5%A1%91%E6%88%90%E5%9E%8B%E6%9C%BA%E7%AC%AC28%E9%A1%B5.webp',
    description: 'High-performance extrusion machinery for continuous production.',
    specs: ['Output: 50-500 kg/h', 'Screw Diameter: 25-120mm', 'Multi-layer Capable']
  },
  {
    title: 'Blow Molding Systems',
    image: 'https://dgtechmachinery.com/wp-content/uploads/2024/08/Single-Engine-Set.webp',
    hoverImage: 'https://dgtechmachinery.com/wp-content/uploads/2024/09/Mask-group-15.webp',
    description: 'Efficient blow molding systems for container manufacturing.',
    specs: ['Bottle Size: 100ml-20L', 'Output: Up to 6000 BPH', 'Quick Mold Change']
  },
  {
    title: 'CNC Machinery',
    image: 'https://dgtechmachinery.com/wp-content/uploads/2024/09/Mask-group-15.webp',
    hoverImage: 'https://dgtechmachinery.com/wp-content/uploads/2024/08/Untitled-1.webp',
    description: 'Precision CNC machines for complex manufacturing operations.',
    specs: ['5-Axis Capability', 'Accuracy: ±0.005mm', 'Advanced Tool Management']
  }
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <section id="products" className="py-16 relative">
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Innovative solutions for modern manufacturing</p>
        </motion.div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={onDrag}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group
                cursor-pointer transform-gpu w-full"
            >
              <div className="h-48 sm:h-64 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 
                    transition-all duration-700 ease-out"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.title} hover`}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 
                    group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    transform group-hover:rotate-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                    group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-industrial-secondary hover:bg-industrial-hover text-white py-2 sm:py-3 px-4 sm:px-6 
                        rounded-lg font-semibold transition-colors duration-200"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 dark:text-white transform group-hover:translate-y-[-8px] 
                transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-industrial-secondary transition-colors">
                  {product.title}
                </h3>
                <p className="text-industrial-primary/80 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <p key={i} className="text-sm text-industrial-primary/70 dark:text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-industrial-secondary rounded-full mr-2 group-hover:animate-pulse" />
                      {spec}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}