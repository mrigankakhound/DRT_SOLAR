import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

function CountUp({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
}

const stats = [
  { target: 500, suffix: '+', prefix: '', label: 'Installations Completed', desc: 'Across Assam & Northeast India' },
  { target: 2, suffix: ' Cr+', prefix: '₹', label: 'Total Customer Savings', desc: 'In electricity bills saved annually' },
  { target: 5, suffix: ' MW+', prefix: '', label: 'Capacity Installed', desc: 'Clean energy powering thousands' },
  { target: 98, suffix: '%', prefix: '', label: 'Satisfaction Rate', desc: 'Based on post-installation surveys' },
];

export default function BenefitsSection() {
  return (
    <section id="stats" className="section-padding bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-yellow-300 uppercase bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Numbers That Speak for Themselves
            </h2>
            <p className="text-green-200/70 max-w-xl mx-auto text-base">
              Since 2022, DRT ENTERPRISE has been the most trusted solar partner across Jorhat and the Northeast.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold text-yellow-400 mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-green-300/60 text-xs">{stat.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
