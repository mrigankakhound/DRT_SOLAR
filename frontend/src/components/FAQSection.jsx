import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    q: 'How much does a solar panel installation cost in Assam?',
    a: 'A typical residential installation (3kW–5kW) costs between ₹1.8–3.5 lakh. After PM Surya Ghar subsidy (up to ₹78,000), the net cost is significantly lower. We offer zero-cost EMI options as well.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential installations are completed in 1–3 days. Commercial projects take 5–15 days depending on the system size. We conduct a free site visit before commencing work.',
  },
  {
    q: 'What is the payback period?',
    a: 'With current electricity rates and subsidies, most of our customers recover their investment in 3–5 years. After that, you get free power for 20+ years.',
  },
  {
    q: 'Will solar work during cloudy days or power cuts?',
    a: 'Solar panels produce power on cloudy days (at reduced output). With a battery backup system, you get uninterrupted power even during grid failures and at night.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'We offer a 25-year performance warranty on panels, 10-year warranty on inverters, and a 5-year comprehensive installation warranty covering all labor and materials.',
  },
  {
    q: 'Do you help with government subsidy applications?',
    a: 'Yes! We handle all paperwork for PM Surya Ghar Muft Bijli Yojana and state-level subsidies. Our team guides you from application to subsidy disbursement.',
  },
  {
    q: 'Do you provide after-sales service?',
    a: 'Absolutely. We have a dedicated service team in Jorhat available 6 days a week. We also offer annual maintenance contracts (AMC) for hassle-free upkeep.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className={`border rounded-xl overflow-hidden transition-colors ${open ? 'border-green-300 bg-green-50/50' : 'border-slate-200 bg-white'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className={`font-medium text-sm md:text-base transition-colors ${open ? 'text-green-800' : 'text-slate-800'}`}>
            {faq.q}
          </span>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
            {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Everything you need to know before going solar.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
