import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTABanner() {
  return (
    <section id="cta-banner" className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-4 border-yellow-600/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-4 border-yellow-600/15 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="text-5xl mb-5">☀️</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4 leading-tight">
              Ready to Switch to Solar?
            </h2>
            <p className="text-green-800/80 text-lg max-w-xl mx-auto mb-8">
              Get a FREE site assessment and custom quote within 24 hours. No obligation, no pressure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                id="cta-get-quote"
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg text-base"
              >
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+917002322258"
                className="inline-flex items-center gap-2 bg-white/70 hover:bg-white text-green-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                <Phone className="w-5 h-5" />
                +91 7002322258
              </a>
            </div>
            <p className="text-green-800/60 text-sm mt-5">✓ Free consultation &nbsp; ✓ No hidden charges &nbsp; ✓ Government subsidy assistance</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
