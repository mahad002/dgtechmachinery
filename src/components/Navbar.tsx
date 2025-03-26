import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Settings, PenTool as Tool, Package, Wrench, Menu, X } from 'lucide-react';

const menuItems = [
  { 
    name: 'Home',
    href: '#home'
  },
  { 
    name: 'Products',
    href: '#products',
    submenu: [
      { name: 'Injection Molding', icon: Settings, description: 'High-precision injection molding machines' },
      { name: 'Blow Molding', icon: Tool, description: 'Advanced blow molding solutions' },
      { name: 'Auxiliaries', icon: Wrench, description: 'Essential auxiliary equipment' },
      { name: 'Packaging', icon: Package, description: 'Complete packaging solutions' }
    ]
  },
  {
    name: 'What We Do',
    href: '#what-we-do',
    // submenu: [
    //   { name: 'Manufacturing', icon: Settings, description: 'Custom manufacturing solutions' },
    //   { name: 'Automation', icon: Tool, description: 'Industrial automation systems' },
    //   { name: 'Maintenance', icon: Wrench, description: 'Comprehensive maintenance services' },
    //   { name: 'Integration', icon: Package, description: 'Seamless system integration' }
    // ]
  },
  {
    name: 'Why Choose Us',
    href: '#why-choose-us'
  },
  {
    name: 'About',
    href: '#about'
  },
  { name: 'Contact',
    href: '#contact' },
  { 
    name: 'Partners',
    href: '#partners'
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = (menuName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu('');
    }, 300);
  };

  const handleMobileMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'} backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex-shrink-0">
            <img
              src="https://dgtechmachinery.com/wp-content/uploads/2024/08/DG-TRCH-MACHINERY-03-1.webp"
              alt="DG Tech Machinery"
              className="h-12 w-auto"
            />
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-industrial-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div ref={menuRef} className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                    ${scrolled ? 'text-industrial-primary' : 'text-white'} 
                    hover:text-industrial-secondary transition-colors`}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>
                
                {item.submenu && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-4"
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-industrial-secondary/10 text-industrial-secondary">
                          {React.createElement(subItem.icon, { className: "w-6 h-6" })}
                        </div>
                        <div>
                          <p className="font-medium text-industrial-primary">{subItem.name}</p>
                          <p className="text-sm text-gray-600">{subItem.description}</p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-industrial-primary 
                      hover:text-industrial-secondary hover:bg-gray-50"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item.submenu) {
                        handleMobileMenuClick(item.name);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  
                  {item.submenu && activeMenu === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-industrial-secondary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}