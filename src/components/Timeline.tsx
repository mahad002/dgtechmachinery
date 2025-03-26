import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Rocket, TrendingUp, Building2, Zap, Globe } from 'lucide-react';

const timelineData = [
  {
    year: '2006',
    title: 'Seed Stage',
    icon: Clock,
    description: 'Founded in 2006 by a dynamic entrepreneur and tech-visionary, we lead Pakistan in digital security, combining innovative technologies with thoughtful leadership.',
    details: 'Our commitment to excellence drives us to continually redefine industry standards and safeguard our clients\' digital assets with unparalleled expertise.'
  },
  {
    year: '2008',
    title: 'Startup',
    icon: Rocket,
    description: 'The startup focuses on developing reliable security solutions through a deep understanding of network systems, delivering cost-effective technological excellence to fuel business growth.',
    details: 'Our dedication to excellence motivates us to consistently set new industry standards and protect our clients\' digital assets with unmatched expertise.'
  },
  {
    year: '2010',
    title: 'Growth',
    icon: TrendingUp,
    description: 'The growth stage of a business focused on scaling operations, expanding markets, and solidifying industry presence through strategic investments and adaptations.',
    details: 'Delivering robust security solutions by understanding your network, exceeding expectations with diverse expertise and cost-effective technology.'
  },
  {
    year: '2014',
    title: 'Establish',
    icon: Building2,
    description: 'In 2014, Establish expanded day-by-day, adding product lines such as CCTV, BMS, Fire Alarm Systems, Smart Burglar Systems, and more.',
    details: 'Expanding daily with CCTV, BMS, fire alarms, smart burglar systems, baggage scanners, access controls, GPS, and more.'
  },
  {
    year: '2018',
    title: 'Boom',
    icon: Zap,
    description: 'Our parent company boomed in 2018 by grabbing the large clients like Askari, DHA, Pakistan Army, Arfa Technology Park, Kartarpur Corridor etc by focusing on security leading to business growth and development.',
    details: ''
  },
  {
    year: '2022',
    title: 'Expansion',
    icon: Globe,
    description: 'DG Tech Machinery stands at the forefront of the industry, driving innovation with our state-of-the-art plastic molding solutions.',
    details: 'We specialize in customizing our technology to meet the unique needs of each client, ensuring tailored, high-quality results that exceed expectations.'
  }
];

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-industrial-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-industrial-secondary">Our Journey</h2>
          <p className="text-base md:text-lg text-white/90">Milestones that shaped our success</p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-industrial-secondary via-industrial-hover to-industrial-secondary" />

          {timelineData.map((item, index) => (
            <div key={item.year} className="relative">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start justify-between mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start pl-16 md:pl-0`}
              >
                {/* Mobile year indicator */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 top-0 bg-industrial-secondary text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                  {item.year}
                </div>
                
                {/* Timeline content */}
                <div className={`md:w-5/12 w-full ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-xl relative shadow-xl border border-white/10"
                >
                  <span className="hidden md:block text-industrial-secondary text-3xl md:text-4xl font-bold mb-3">{item.year}</span>
                  <h3 className={`text-lg md:text-xl font-bold mt-2 mb-3 flex items-center gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                  }`}>
                    {index % 2 === 0 ? (
                      <>
                        {item.title}
                        {<item.icon className="w-8 h-8 text-industrial-secondary" />}
                      </>
                    ) : (
                      <>
                        {<item.icon className="w-8 h-8 text-industrial-secondary" />}
                        {item.title}
                      </>
                    )}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">{item.description}</p>
                  {item.details && (
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed italic">{item.details}</p>
                  )}
                </motion.div>
              </div>

              {/* Timeline dot - Hidden on mobile */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-industrial-secondary 
                  rounded-full border-4 border-white shadow-xl z-10"
              />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}