import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/Logo Section.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Impact', path: '/impact' },
    { name: 'Events', path: '/events' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-50 shadow-sm" style={{ backgroundColor: 'rgba(244, 248, 249, 0.95)', borderBottom: '1px solid rgba(31, 58, 52, 0.2)' }}>
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logoImage}
              alt="Dhwayam Logo"
              className="h-10 w-auto"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-bold gradient-text"
            >
              Dhwayam
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative font-medium transition-colors duration-300"
                style={{ 
                  color: isActive(item.path) ? '#1F3A34' : 'rgba(31, 58, 52, 0.7)'
                }}
                onMouseEnter={(e) => e.target.style.color = '#1F3A34'}
                onMouseLeave={(e) => e.target.style.color = isActive(item.path) ? '#1F3A34' : 'rgba(31, 58, 52, 0.7)'}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#1F3A34' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/booking" className="btn-primary">
              Book Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: 'rgba(31, 58, 52, 0.7)' }}
            onMouseEnter={(e) => e.target.style.color = '#1F3A34'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(31, 58, 52, 0.7)'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 rounded-lg transition-colors"
                style={{ 
                  backgroundColor: isActive(item.path) ? 'rgba(31, 58, 52, 0.1)' : 'transparent',
                  color: isActive(item.path) ? '#1F3A34' : 'rgba(31, 58, 52, 0.7)'
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 btn-primary text-center"
            >
              Book Us
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;