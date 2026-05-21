import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import CTABanner from '../components/CTABanner';
import { Filter } from 'lucide-react';

const projects = [
  {
    id: 1, icon: '🏠', title: 'Green Valley Residences', location: 'Jorhat, Assam',
    capacity: '50kW', type: 'Residential', year: '2024',
    description: 'A 50-unit housing society fully powered by rooftop solar. Monthly savings of ₹1.2 lakh for residents.',
    highlights: ['50 households powered', '₹1.2L monthly savings', 'Net metering connected', 'Battery backup installed'],
  },
  {
    id: 2, icon: '🏨', title: 'Hotel Brahmaputra Grand', location: 'Jorhat, Assam',
    capacity: '100kW', type: 'Commercial', year: '2023',
    description: 'A premier hotel cuts electricity costs by 70% with a 100kW rooftop solar installation.',
    highlights: ['70% bill reduction', '₹2.8L monthly savings', 'Grid-tied system', 'SCADA monitoring'],
  },
  {
    id: 3, icon: '🏭', title: 'Assam Textile Mills', location: 'Dibrugarh, Assam',
    capacity: '500kW', type: 'Industrial', year: '2023',
    description: 'Largest industrial solar installation in Dibrugarh. Powering an entire textile manufacturing plant.',
    highlights: ['500kW peak output', '₹12L monthly savings', 'Full EPC turnkey', 'O&M contract signed'],
  },
  {
    id: 4, icon: '🏫', title: 'Don Bosco School', location: 'Jorhat, Assam',
    capacity: '75kW', type: 'Institutional', year: '2022',
    description: 'Educational institution goes green — savings fund new computers and laboratories.',
    highlights: ['75kW system', 'Govt. subsidy utilized', '₹1.8L monthly savings', 'Student awareness program'],
  },
  {
    id: 5, icon: '🚜', title: 'Nagaon Farmers Collective', location: 'Nagaon, Assam',
    capacity: '15 pumps (5HP each)', type: 'Agricultural', year: '2024',
    description: 'PM-KUSUM scheme: 15 solar water pumps installed for irrigation, eliminating diesel costs completely.',
    highlights: ['15 solar pumps', 'PM-KUSUM funded', '₹4.5L diesel savings/yr', 'Drip irrigation linked'],
  },
  {
    id: 6, icon: '🏥', title: 'Dispur Civil Hospital', location: 'Dispur, Assam',
    capacity: '150kW', type: 'Institutional', year: '2022',
    description: 'Critical public health infrastructure powered by solar, ensuring uninterrupted power to wards and ICUs.',
    highlights: ['Battery backup for ICU', '150kW capacity', '24x7 uninterrupted power', 'Emergency failover system'],
  },
  {
    id: 7, icon: '🛒', title: 'Fancy Bazaar Shopping Complex', location: 'Jorhat, Assam',
    capacity: '80kW', type: 'Commercial', year: '2023',
    description: 'Multi-tenant retail complex goes solar, reducing common area electricity bills to near zero.',
    highlights: ['80kW rooftop', '₹1.5L monthly savings', 'Shared tenant benefit', 'EV charging points added'],
  },
  {
    id: 8, icon: '⚡', title: 'Jorhat Industrial Estate', location: 'Jorhat, Assam',
    capacity: '1 MW', type: 'Industrial', year: '2024',
    description: 'Milestone 1 MW ground-mount installation powering multiple industrial units in an estate.',
    highlights: ['1 MW ground mount', '6 industrial units powered', '₹25L monthly savings', 'SCADA + remote ops'],
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural', 'Institutional'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 to-green-800 py-20 px-4">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-yellow-300 uppercase bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-5">
              Our Projects
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Powering <span className="text-yellow-400">Real Transformations</span>
            </h1>
            <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
              From village homes to industrial megaplants — explore our showcase of completed solar projects across Assam and Northeast India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="container-custom grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { val: '500+', label: 'Installations' },
            { val: '5 MW+', label: 'Total Capacity' },
            { val: '₹2Cr+', label: 'Customer Savings' },
            { val: '20+', label: 'Districts Served' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-2xl text-green-800">{val}</div>
              <div className="text-slate-500 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="container-custom py-4 flex items-center gap-3 overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === cat
                  ? 'bg-green-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.06}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
