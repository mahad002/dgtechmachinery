import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import AnimatedText from './AnimatedText';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    videoId: 'GPPSuD8BcLU',
    title: 'Tederic Injection Molding',
    subtitle: 'Next-generation precision and efficiency'
  },
  {
    videoId: 'vYBzgzWPNZE',
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
    <div className="relative h-screen bg-gray-900">
      <div className="relative h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <YouTube
              videoId={slides[currentSlide].videoId}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  loop: 1,
                  controls: 0,
                  modestbranding: 1,
                },
              }}
              className="w-full h-full object-cover"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <AnimatedText
                text={slides[currentSlide].title}
                className="text-3xl md:text-4xl font-bold text-white"
                delay={0.2}
              />
              <AnimatedText
                text={slides[currentSlide].subtitle}
                className="text-4xl md:text-6xl text-white/90 max-w-4xl mx-auto font-bold"
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