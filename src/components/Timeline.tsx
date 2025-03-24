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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-white/80">Milestones that shaped our success</p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-industrial-secondary/30" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
                >
                  <span className="text-industrial-secondary text-4xl font-bold">{item.year}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 flex items-center gap-2 justify-end">
                    {index % 2 === 0 ? (
                      <>
                        {item.title}
                        {<item.icon className="w-6 h-6 text-industrial-hover" />}
                      </>
                    ) : (
                      <>
                        {<item.icon className="w-6 h-6 text-industrial-hover" />}
                        {item.title}
                      </>
                    )}
                  </h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  {item.details && (
                    <p className="text-white/60 text-sm">{item.details}</p>
                  )}
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-industrial-secondary 
                  rounded-full border-4 border-white shadow-lg z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}