import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact-home" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Get Your <span className="gradient-text">Free Solar Quote</span> Today
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Fill in the form and our solar consultant will contact you within 24 hours. Completely free — no obligation.
            </p>

            <div className="space-y-3">
              {[
                '✅ Free site visit & assessment',
                '✅ Custom system design',
                '✅ Subsidy & financing guidance',
                '✅ No hidden charges',
              ].map((item) => (
                <div key={item} className="text-slate-600 text-sm">{item}</div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-800 rounded-2xl text-white">
              <div className="text-xs text-green-300 mb-1">Special Offer</div>
              <div className="font-semibold">Free Annual Maintenance</div>
              <div className="text-green-200/70 text-xs mt-0.5">For all installations booked this month</div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
              <ContactForm compact />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
