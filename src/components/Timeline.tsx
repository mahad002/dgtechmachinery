import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Rocket, TrendingUp, Building2, Zap, Globe } from 'lucide-react';

const timelineData = [
  {
    year: '2006',
    title: 'Seed Stage',
    icon: Clock,
    description: 'Founded in 2006 by a dynamic entrepreneur and tech-visionary, we lead Pakistan in digital security, combining innovative technologies with thoughtful leadership.',
    details: 'Our commitment to excellence drives us to continually redefine industry standards and safeguard our clients\' digital assets with unparalleled expertise.',
    color: '#f59e0b' // amber-500
  },
  {
    year: '2008',
    title: 'Startup',
    icon: Rocket,
    description: 'The startup focuses on developing reliable security solutions through a deep understanding of network systems, delivering cost-effective technological excellence to fuel business growth.',
    details: 'Our dedication to excellence motivates us to consistently set new industry standards and protect our clients\' digital assets with unmatched expertise.',
    color: '#10b981' // emerald-500
  },
  {
    year: '2010',
    title: 'Growth',
    icon: TrendingUp,
    description: 'The growth stage of a business focused on scaling operations, expanding markets, and solidifying industry presence through strategic investments and adaptations.',
    details: 'Delivering robust security solutions by understanding your network, exceeding expectations with diverse expertise and cost-effective technology.',
    color: '#3b82f6' // blue-500
  },
  {
    year: '2014',
    title: 'Establish',
    icon: Building2,
    description: 'In 2014, Establish expanded day-by-day, adding product lines such as CCTV, BMS, Fire Alarm Systems, Smart Burglar Systems, and more.',
    details: 'Expanding daily with CCTV, BMS, fire alarms, smart burglar systems, baggage scanners, access controls, GPS, and more.',
    color: '#8b5cf6' // violet-500
  },
  {
    year: '2018',
    title: 'Boom',
    icon: Zap,
    description: 'Our parent company boomed in 2018 by grabbing the large clients like Askari, DHA, Pakistan Army, Arfa Technology Park, Kartarpur Corridor etc by focusing on security leading to business growth and development.',
    details: '',
    color: '#ec4899' // pink-500
  },
  {
    year: '2022',
    title: 'Expansion',
    icon: Globe,
    description: 'DG Tech Machinery stands at the forefront of the industry, driving innovation with our state-of-the-art plastic molding solutions.',
    details: 'We specialize in customizing our technology to meet the unique needs of each client, ensuring tailored, high-quality results that exceed expectations.',
    color: '#f43f5e' // rose-500
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  console.log(contentInView);

  // Auto-scroll timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br 
        from-industrial-primary to-industrial-primary/90 text-white overflow-hidden"
    >
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-industrial-secondary to-white">
              Journey Through Time
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            Milestones that shaped our path to becoming Pakistan's leading machinery solutions provider
          </p>
        </motion.div>

        <div ref={contentRef} className="relative">
          {/* Main content area */}
          <div className="h-[50vh] md:h-[60vh] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="w-full max-w-3xl mx-auto"
              >
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                  <div className="pl-8 relative">
                    {/* Year marker */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute left-0 top-0 -translate-x-[2.5rem] sm:-translate-x-[3rem] md:-translate-x-[3.5rem] 
                        flex flex-col items-center z-10"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: timelineData[activeIndex].color }}
                      >
                        {React.createElement(timelineData[activeIndex].icon, { 
                          className: "w-4 h-4 text-white" 
                        })}
                      </div>
                      <div className="mt-2 text-2xl font-bold" style={{ color: timelineData[activeIndex].color }}>
                        {timelineData[activeIndex].year}
                      </div>
                    </motion.div>

                    {/* Content card */}
                    <div className="ml-4 sm:ml-8 md:ml-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                      <h3 className="text-2xl font-bold mb-4">{timelineData[activeIndex].title}</h3>
                      <p className="text-white/80 mb-4">{timelineData[activeIndex].description}</p>
                      {timelineData[activeIndex].details && (
                        <p className="text-white/60 text-sm italic">{timelineData[activeIndex].details}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Timeline navigation */}
          <div className="relative mt-8 px-4 max-w-3xl mx-auto">
            {/* Timeline bar */}
            <div className="absolute h-1 bg-white/10 w-full rounded-full overflow-hidden">
              <motion.div
                className="absolute h-full bg-industrial-secondary"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex justify-between relative">
              {timelineData.map((item, index) => {
                const isPast = index <= activeIndex;
                return (
                  <motion.button
                    key={`year-${item.year}`}
                    onClick={() => setActiveIndex(index)}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div 
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                          ${isPast 
                            ? 'border-industrial-secondary bg-industrial-secondary' 
                            : 'border-white/30 bg-transparent'}`}
                      >
                        <div 
                          className={`absolute inset-1 rounded-full transition-all duration-300
                            ${index === activeIndex ? 'bg-white' : ''}`}
                        />
                      </div>
                    </div>
                    
                    <div 
                      className={`mt-6 text-sm font-medium transition-all duration-300
                        ${isPast ? 'text-white' : 'text-white/30'}`}
                    >
                      {item.year}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}