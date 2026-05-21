import ScrollReveal from '../components/ScrollReveal';
import TeamCard from '../components/TeamCard';
import MilestoneTimeline from '../components/MilestoneTimeline';
import CTABanner from '../components/CTABanner';
import { ShieldCheck, Award, Leaf, Users } from 'lucide-react';

const team = [
  {
    name: 'Dipankar Roy Talukdar',
    role: 'Founder & CEO',
    initials: 'DRT',
    color: 'bg-green-700',
    bio: 'Solar energy evangelist with 12+ years experience. IIT Jorhat alumnus passionate about clean energy for Northeast India.',
    linkedin: '#',
  },
  {
    name: 'Priyanka Deka',
    role: 'Operations Head',
    initials: 'PD',
    color: 'bg-blue-600',
    bio: 'Manages end-to-end project delivery, ensuring every installation meets the highest quality standards.',
    linkedin: '#',
  },
  {
    name: 'Arun Bora',
    role: 'Chief Engineer',
    initials: 'AB',
    color: 'bg-amber-600',
    bio: 'MNRE-certified electrical engineer with expertise in large-scale commercial and industrial solar design.',
    linkedin: '#',
  },
  {
    name: 'Sumi Gogoi',
    role: 'Sales & Customer Success',
    initials: 'SG',
    color: 'bg-purple-600',
    bio: 'Helps 50+ customers every month find their perfect solar solution with personalized consultations.',
    linkedin: '#',
  },
];

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'Transparent pricing, no hidden costs. We say what we do and do what we say.' },
  { icon: Award, title: 'Quality First', desc: 'We use only Tier-1, IEC-certified panels and components from global manufacturers.' },
  { icon: Leaf, title: 'Sustainability', desc: "Every installation reduces carbon emissions. We're committed to a greener Northeast." },
  { icon: Users, title: 'Customer Focus', desc: 'From consultation to installation and beyond — we\'re with you at every step.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 to-green-800 py-20 px-4">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-yellow-300 uppercase bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Powering Assam's <span className="text-yellow-400">Solar Revolution</span>
            </h1>
            <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
              Since 2022, DRT ENTERPRISE has been the most trusted name in solar energy across Jorhat and the Northeast. 500+ installations, 5 MW+ capacity, and countless happy families.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="section-title">
                Born from a Vision of <span className="gradient-text">Clean Energy</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  DRT ENTERPRISE was founded in 2022 by Diptanayan Khound & Ritiz with a simple mission: make clean solar energy accessible and affordable for every household and business in Assam.
                </p>
                <p>
                  Starting with just 3 residential installations in Jorhat, we have grown into a full-service solar EPC company handling everything from small 1kW home systems to multi-megawatt industrial plants.
                </p>
                <p>
                  Today, we are MNRE-empanelled, ISO-certified, and trusted by 500+ customers across Assam, Meghalaya, and beyond. Our team of 25+ certified professionals handles design, supply, installation, and long-term maintenance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2022', label: 'Founded', icon: '📅' },
                  { value: '500+', label: 'Happy Customers', icon: '😊' },
                  { value: '5 MW+', label: 'Installed Capacity', icon: '⚡' },
                  { value: '25+', label: 'Expert Team', icon: '👷' },
                ].map((s) => (
                  <div key={s.label} className="bg-green-50 rounded-2xl p-5 text-center border border-green-100">
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="font-display font-bold text-2xl text-green-800">{s.value}</div>
                    <div className="text-slate-600 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
                Our Values
              </span>
              <h2 className="section-title">What Drives Us Every Day</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="card text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
                Our Team
              </span>
              <h2 className="section-title">
                The People Behind <span className="gradient-text">DRT ENTERPRISE</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-green-950">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-white mb-2">Certified & Approved</h2>
              <p className="text-green-300/60 text-sm">Our credentials that guarantee quality and trust</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'MNRE Empanelled', icon: '🏛️' },
              { label: 'ISO Certified', icon: '📜' },
              { label: 'MSME Registered', icon: '🏷️' },
              { label: 'PM Surya Ghar Partner', icon: '☀️' },
            ].map((cert) => (
              <ScrollReveal key={cert.label}>
                <div className="bg-green-800/50 border border-green-700 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <div className="text-white font-semibold text-sm">{cert.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MilestoneTimeline />
      <CTABanner />
    </>
  );
}
