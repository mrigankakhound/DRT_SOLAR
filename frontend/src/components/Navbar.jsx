import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 relative group ${isActive ? 'text-green-700' : 'text-slate-700 hover:text-green-700'
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-green-800 flex items-center justify-center">
                <Sun className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <div className="font-display font-800 text-green-800 text-base tracking-tight leading-tight">DRT ENTERPRISE</div>
                <div className="text-xs text-slate-500 font-normal leading-tight hidden sm:block">Solar Energy Solutions</div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 rounded-full transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+917002322258" className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-green-700 transition-colors font-medium">
                <Phone className="w-4 h-4" />
                +91 7002322258
              </a>
              <Link to="/contact" className="btn-primary text-sm py-2 px-4">
                Free Quote
              </Link>
            </div>

            {/* Hamburger */}
            <button
              id="nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-green-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-800 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="font-display font-bold text-green-800 text-sm">DRT ENTERPRISE</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100">
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                        ? 'bg-green-50 text-green-800 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-green-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="p-5 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+917002322258"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-green-700 text-green-700 text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 7002322258
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-18" />
    </>
  );
}
