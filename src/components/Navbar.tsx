import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Settings, PenTool as Tool, Package, Wrench, Menu, X } from 'lucide-react';

const menuItems = [
  { 
    name: 'Products',
    submenu: [
      { name: 'Injection Molding', icon: Settings, description: 'High-precision injection molding machines' },
      { name: 'Blow Molding', icon: Tool, description: 'Advanced blow molding solutions' },
      { name: 'PET Molds', icon: Package, description: 'Custom PET mold manufacturing' },
      { name: 'Auxiliaries', icon: Wrench, description: 'Supporting equipment and tools' }
    ]
  },
  {
    name: 'Solutions',
    submenu: [
      { name: 'Manufacturing', icon: Settings, description: 'Custom manufacturing solutions' },
      { name: 'Automation', icon: Tool, description: 'Industrial automation systems' },
      { name: 'Maintenance', icon: Wrench, description: 'Preventive maintenance services' },
      { name: 'Integration', icon: Package, description: 'Seamless system integration' }
    ]
  },
  { name: 'Partners' },
  { name: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number>();

  console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMenu(itemName);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMobileMenuClick = (itemName: string) => {
    if (activeMenu !== itemName) {
      setActiveMenu(itemName);
    } else {
      setActiveMenu(null);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 font-medium">
          <div className="flex-shrink-0">
            <img
              src="https://dgtechmachinery.com/wp-content/uploads/2024/08/DG-TRCH-MACHINERY-03-1.webp"
              alt="DG Tech Machinery"
              className="h-12 w-auto"
            />
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-industrial-hover transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div ref={menuRef} className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                <motion.div
                  className="flex items-center space-x-1 cursor-pointer px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium text-white hover:text-industrial-hover">
                    {item.name}
                  </span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 text-white 
                      transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </motion.div>
                
                {item.submenu && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-xl 
                      shadow-2xl ring-1 ring-black/5 p-4 grid grid-cols-1 gap-2"
                  >
                    {Array.isArray(item.submenu) && item.submenu.map((subItem) => (
                      <motion.a
                        key={subItem.name}
                        href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 
                          transition-colors duration-200"
                        whileHover={{ x: 8 }}
                      >
                        <div className="p-2 rounded-lg bg-industrial-secondary/10 text-industrial-secondary">
                          {React.createElement(subItem.icon, { className: "w-6 h-6" })}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-industrial-primary">{subItem.name}</p>
                          <p className="text-sm text-industrial-primary/70">{subItem.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={mobileMenuOpen ? { height: 'auto', opacity: 1, x: 0 } : { height: 0, opacity: 0, x: '100%' }}
            transition={{ duration: 0.2 }}
            className={`md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg overflow-hidden
              ${mobileMenuOpen ? 'border-t border-white/10' : ''} max-h-[calc(100vh-5rem)] z-50`}
          >
            <div className="px-4 py-4 overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    onClick={() => handleMobileMenuClick(item.name)}
                    className="w-full flex items-center justify-between text-white py-3"
                  >
                    <span className="text-lg">{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200
                          ${activeMenu === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  
                  {item.submenu && activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center space-x-3 p-3 text-white/80 hover:text-white"
                        >
                          {React.createElement(subItem.icon, { className: "w-5 h-5" })}
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}