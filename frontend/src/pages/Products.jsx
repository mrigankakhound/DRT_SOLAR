import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import CTABanner from '../components/CTABanner';
import { Filter } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    icon: '🏠',
    name: 'Residential Home Kit',
    category: 'Residential',
    description: 'Ideal for 2–4 BHK homes. High-efficiency monocrystalline panels with a hybrid inverter for maximum savings.',
    price: 'From ₹1.8 Lakh',
    capacity: '1kW – 10kW',
    warranty: '25-year panel, 5-year installation',
    features: ['High-efficiency monocrystalline panels', 'Hybrid inverter (grid + battery)', 'PM Surya Ghar subsidy eligible', 'Smartphone monitoring app', 'Net metering compatible'],
  },
  {
    id: 2,
    icon: '🔋',
    name: 'Solar + Battery Backup',
    category: 'Residential',
    description: 'Never face a power cut again. Our battery-backed system stores excess energy for use at night or during outages.',
    price: 'From ₹2.8 Lakh',
    capacity: '3kW – 10kW + Battery',
    warranty: '25-year panel, 10-year battery',
    features: ['Lithium-ion battery storage', 'Complete power independence', 'Auto switch during outages', 'Day & night coverage', 'Expandable storage modules'],
  },
  {
    id: 3,
    icon: '🏢',
    name: 'Commercial Rooftop System',
    category: 'Commercial',
    description: 'Cut commercial electricity costs by up to 80%. Ideal for offices, hotels, hospitals, and retail complexes.',
    price: 'From ₹8 Lakh',
    capacity: '10kW – 500kW',
    warranty: '25-year panel, 5-year installation',
    features: ['Grid-tied & hybrid options', 'Zero-EMI financing available', 'ROI in 3–4 years', 'SCADA monitoring dashboard', 'Priority service support'],
  },
  {
    id: 4,
    icon: '🏫',
    name: 'Institutional Solar',
    category: 'Commercial',
    description: 'Purpose-built for schools, colleges, government buildings, and NGOs. Includes subsidy application support.',
    price: 'From ₹12 Lakh',
    capacity: '20kW – 200kW',
    warranty: '25-year panel, 5-year installation',
    features: ['Special institutional pricing', 'Government subsidy assistance', 'Educational material provided', 'Annual maintenance included', 'Load analysis & audit'],
  },
  {
    id: 5,
    icon: '🏭',
    name: 'Industrial Solar Plant',
    category: 'Industrial',
    description: 'Massive energy cost reduction for factories, textile mills, and industrial parks. Full EPC turnkey solution.',
    price: 'Custom Pricing',
    capacity: '500kW – 10MW+',
    warranty: '25-year panel, 10-year inverter',
    features: ['Complete EPC turnkey solution', 'SCADA & remote monitoring', 'O&M contract available', 'Priority engineering support', 'Custom financing options'],
  },
  {
    id: 6,
    icon: '🚜',
    name: 'Solar Water Pump',
    category: 'Agricultural',
    description: 'End diesel costs for irrigation. Our solar pumps work all day with zero fuel, zero noise, zero bills.',
    price: 'From ₹80,000',
    capacity: '1HP – 10HP pumps',
    warranty: '5-year pump, 25-year panel',
    features: ['PM-KUSUM scheme eligible', 'No fuel or running cost', 'Works on cloudy days', 'Drip & sprinkler compatible', 'Remote monitoring option'],
  },
  {
    id: 7,
    icon: '💡',
    name: 'Solar Street Lights',
    category: 'Agricultural',
    description: 'Illuminate villages, roads, and farms with standalone solar street lights. No wiring needed.',
    price: 'From ₹8,000/unit',
    capacity: 'Standalone units',
    warranty: '5-year full warranty',
    features: ['Auto dusk-to-dawn operation', 'No electrical wiring needed', 'IP65 weatherproof', 'Motion sensor option', 'Bulk project pricing'],
  },
  {
    id: 8,
    icon: '⚡',
    name: 'EV Solar Charging',
    category: 'Commercial',
    description: 'Power your electric vehicles with solar. Perfect for housing societies, offices, and fuel stations.',
    price: 'From ₹1.5 Lakh',
    capacity: '7.4kW – 22kW chargers',
    warranty: '5-year system warranty',
    features: ['AC & DC fast chargers', 'Solar-powered charging', 'Fleet management app', 'Multiple EV compatible', 'Future-proof design'],
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural'];

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 to-green-800 py-20 px-4">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-yellow-300 uppercase bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-5">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Solar Solutions for <span className="text-yellow-400">Every Need</span>
            </h1>
            <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
              From residential rooftops to industrial megaplants — explore our full range of solar products and find the right solution for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="container-custom py-4 flex items-center gap-3 overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-green-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.06}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">No products found.</div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
