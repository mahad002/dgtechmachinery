import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const slides = [
  {
    title: 'Be Pakistani Buy Pakistani',
    subtitle: 'Elevating machinery excellence nationwide'
  },
  {
    title: 'Crafted in Pakistan, Chosen by Pakistanis',
    subtitle: 'Engineering innovation for industrial prosperity'
  },
  {
    title: 'Pakistani Pride, Pakistani Engineering',
    subtitle: 'Advancing technological self-reliance across sectors'
  },
  {
    title: 'Pakistani Machines, Pakistani Progress',
    subtitle: 'Building the nation through manufacturing excellence'
  },
  {
    title: 'Pakistan Made, Pakistan Powered',
    subtitle: 'Strengthening industrial foundations with local expertise'
  },
  {
    title: 'Choose Pakistani, Choose Quality',
    subtitle: 'Transforming industries with homegrown machinery solutions'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={`relative ${isExpanded ? 'h-[60vh]' : 'h-[45vh]'} md:h-screen bg-gray-900 pt-16 md:pt-0 
      transition-all duration-500`}>
      <div className="relative h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/GPPSuD8BcLU?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=GPPSuD8BcLU`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover md:scale-125"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1 md:p-2 rounded-full bg-white/10 
              hover:bg-white/20 text-white backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 md:p-2 rounded-full bg-white/10 
              hover:bg-white/20 text-white backdrop-blur-sm z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile View */}
              <div className="md:hidden flex flex-col items-center space-y-4 px-4">
                <h2 className="text-2xl font-bold text-white text-center mt-8">
                  {slides[currentSlide].title}
                </h2>
                <motion.div 
                  animate={{ height: isExpanded ? 'auto' : '0' }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center space-y-3"
                  >
                    <h3 className="text-xl font-bold text-white/90 leading-tight text-center">
                      {slides[currentSlide].subtitle}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed max-w-xs text-center">
                      Leading provider of industrial machinery solutions in Pakistan
                    </p>
                  </motion.div>
                </motion.div>
                
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center space-x-1 text-white/80 text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 
                    ${isExpanded ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-industrial-secondary text-white px-6 py-2 rounded-full text-sm
                    font-medium flex items-center space-x-2 shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block text-center space-y-8">
                <AnimatedText
                  text={slides[currentSlide].title}
                  className="text-4xl font-bold text-white"
                  delay={0.2}
                />
                <AnimatedText
                  text={slides[currentSlide].subtitle}
                  className="text-6xl text-white/90 max-w-4xl mx-auto font-bold"
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
                  className="bg-industrial-secondary hover:bg-industrial-hover text-white px-8 py-3 
                    rounded-full text-lg font-semibold transition-colors duration-300 flex items-center 
                    space-x-2 mx-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}