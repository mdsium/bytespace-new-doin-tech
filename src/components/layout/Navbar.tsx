import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { ByteSpaceLogo } from '../ui/ByteSpaceLogo';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Creators', href: '/creator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#003BE2]/90 backdrop-blur-md shadow-lg shadow-blue-900/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <ByteSpaceLogo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/creator' && location.pathname.startsWith('/creator'));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-150 tracking-wide ${
                    isActive ? 'text-white font-bold' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/login"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-150"
            >
              Sign In
            </Link>

            <Link to="/signup">
              <Button variant="outline" size="sm">
                Join Us
              </Button>
            </Link>

            {/* Shopping Bag Button */}
            <button
              type="button"
              className="p-2 text-white/90 hover:text-white transition-colors duration-150 relative cursor-pointer"
              aria-label="Shopping Cart with 2 items"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute 1 top-1 right-1 w-4 h-4 bg-[#CBFC01] text-slate-950 font-bold rounded-full flex items-center justify-center text-[10px] shadow-sm">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              className="p-2 text-white/90 hover:text-white"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0A3EC6] border-t border-white/10 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-base font-medium pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-white/10 my-1" />

              <div className="flex flex-col gap-3">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2.5 text-white font-medium hover:text-[#D4FC02]"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="lime" size="md" fullWidth>
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
