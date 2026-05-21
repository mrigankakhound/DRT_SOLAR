import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    id: 1,
    icon: '🏠',
    category: 'Residential',
    title: 'Home Solar Kit',
    price: 'From ₹1.8 Lakh',
    features: ['1kW – 10kW systems', 'Battery backup option', 'PM Surya Ghar subsidy', 'App monitoring'],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    icon: '🏢',
    category: 'Commercial',
    title: 'Business Solar System',
    price: 'From ₹8 Lakh',
    features: ['10kW – 500kW systems', 'Grid-tied & hybrid', 'Zero-EMI financing', 'ROI in 3–4 years'],
    gradient: 'from-blue-500 to-indigo-600',
    featured: true,
  },
  {
    id: 3,
    icon: '🏭',
    category: 'Industrial',
    title: 'Industrial Plant',
    price: 'Custom Pricing',
    features: ['500kW – 10MW+', 'Custom EPC turnkey', 'SCADA monitoring', 'O&M contract'],
    gradient: 'from-orange-500 to-amber-600',
  },
];

export default function ProductsPreview() {
  return (
    <section id="products-preview" className="section-padding bg-slate-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Our Solutions
            </span>
            <h2 className="section-title">
              Solar for Every <span className="gradient-text">Need & Budget</span>
            </h2>
            <p className="section-subtitle mx-auto">
              From cozy homes to large industrial plants — we design, install, and maintain the right solar system for you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {products.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative rounded-2xl overflow-hidden shadow-md ${p.featured ? 'ring-2 ring-green-500 shadow-green-100 shadow-lg' : ''}`}
              >
                {p.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center text-xs font-semibold py-1 tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                {/* Header */}
                <div className={`bg-gradient-to-br ${p.gradient} p-7 ${p.featured ? 'pt-9' : ''}`}>
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <div className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">{p.category}</div>
                  <div className="text-white font-display font-bold text-xl">{p.title}</div>
                  <div className="text-white/90 text-sm mt-1">{p.price}</div>
                </div>
                {/* Features */}
                <div className="bg-white p-6">
                  <ul className="space-y-2.5 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      p.featured
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'border border-green-600 text-green-700 hover:bg-green-50'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-semibold text-sm group"
            >
              View All Products & Specifications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
