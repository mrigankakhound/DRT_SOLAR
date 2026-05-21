import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Zap, TrendingDown, Leaf, Shield, Sun, Award } from 'lucide-react';

const reasons = [
  {
    icon: TrendingDown,
    color: 'text-green-600',
    bg: 'bg-green-50',
    title: 'Cut Bills by Up to 90%',
    desc: 'Generate your own electricity and dramatically reduce monthly power bills from day one.',
  },
  {
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Go Carbon-Neutral',
    desc: 'Reduce your carbon footprint and contribute to a greener, healthier Assam for future generations.',
  },
  {
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'Energy Independence',
    desc: 'Never worry about power outages or rising utility prices. Your own power plant, 24x7.',
  },
  {
    icon: Zap,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    title: 'Instant ROI',
    desc: 'Most DRT installations pay for themselves in 3–5 years. Enjoy free power for 20+ years after.',
  },
  {
    icon: Sun,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    title: 'Government Subsidies',
    desc: 'Avail PM Surya Ghar subsidy up to ₹78,000 on residential installations. We handle the paperwork.',
  },
  {
    icon: Award,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    title: 'Certified & Trusted',
    desc: 'ISO-certified equipment, MNRE-approved installers, and a 5-year full-service warranty on every job.',
  },
];

export default function WhyGoSolar() {
  return (
    <section id="why-solar" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Why Solar?
            </span>
            <h2 className="section-title">
              The Smart Choice for <span className="gradient-text">Every Home & Business</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Solar energy isn't just green — it's the most financially sensible decision you can make in 2026.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="card group h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${reason.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
