import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import AnimatedText from './AnimatedText';

const slides = [
  {
    title: 'Be Pakistani Buy Pakistani',
    subtitle: 'Elevating machinery excellence nationwide'
  },
  {
    title: 'Tederic Injection Molding',
    subtitle: 'Next-generation precision and efficiency'
  },
  {
    title: 'UWA Gen 5 Series',
    subtitle: 'Advanced automation solutions'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-gray-900 pt-20 md:pt-0">
      <div className="relative h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/GPPSuD8BcLU?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=GPPSuD8BcLU`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover scale-125"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 
              hover:bg-white/20 text-white backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 
              hover:bg-white/20 text-white backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8">
              {/* <div className="flex items-center justify-center space-x-8 mb-8">
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-industrial-secondary hover:bg-industrial-hover text-white p-3 rounded-full 
                    transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-industrial-secondary hover:bg-industrial-hover text-white p-3 rounded-full 
                    transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div> */}
              <AnimatedText
                text={slides[currentSlide].title}
                className="text-2xl md:text-4xl font-bold text-white"
                delay={0.2}
              />
              <AnimatedText
                text={slides[currentSlide].subtitle}
                className="text-3xl md:text-6xl text-white/90 max-w-4xl mx-auto font-bold"
                delay={0.4}
              />
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-white/80 max-w-4xl mx-auto"
              >
                DG Tech Machinery is leading Injection Molding Machines, Auxiliaries Equipment,
                PET Molds, Blow Molding Machines, ISBM, IBM, EBM, IML and Turn Key Solution Provider in Pakistan.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-industrial-secondary hover:bg-industrial-hover text-white px-8 py-3 rounded-full 
                  text-lg font-semibold transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}