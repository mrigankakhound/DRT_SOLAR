import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const highlights = [
  '5-Year Installation Warranty',
  'Free Site Assessment',
  '25-Year Panel Lifespan',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green-400/20 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-sm font-medium">#1 Solar Company in Assam</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Power Your Home with{' '}
              <span className="text-yellow-400">Clean Solar</span>{' '}
              Energy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-green-200/80 text-lg leading-relaxed mb-8 max-w-lg"
            >
              DRT ENTERPRISE delivers premium solar installations across Jorhat, Tinsukiya, Guwahati and all over Assam. Cut your electricity bill by up to 90% and get a free site assessment today.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-green-200/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                id="hero-cta-quote"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-yellow-400/30"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917002322258"
                id="hero-cta-call"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </motion.div>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: '500+', label: 'Installations Done', icon: '🏠' },
              { value: '₹2Cr+', label: 'Customer Savings', icon: '💰' },
              { value: '5 MW+', label: 'Capacity Installed', icon: '⚡' },
              { value: '98%', label: 'Customer Satisfaction', icon: '⭐' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-yellow-400 font-display">{stat.value}</div>
                <div className="text-green-200/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: '500+', label: 'Installations' },
            { value: '₹2Cr+', label: 'Savings' },
            { value: '5 MW+', label: 'Capacity' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-yellow-400 font-display">{stat.value}</div>
              <div className="text-green-200/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 60 720 0 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
