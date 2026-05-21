import ScrollReveal from './ScrollReveal';

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'DRT ENTERPRISE started with 3 residential installations in Jorhat.' },
  { year: '2019', title: 'First Commercial Project', desc: 'Completed our first 50kW commercial installation for a hotel in Dispur.' },
  { year: '2020', title: 'MNRE Certification', desc: 'Received official MNRE empanelment, qualifying us for government schemes.' },
  { year: '2021', title: '100 Installations', desc: 'Crossed 100 successful installations and expanded service to Jorhat & Tezpur.' },
  { year: '2022', title: 'Industrial Entry', desc: 'Commissioned first 500kW industrial plant for a textile manufacturer.' },
  { year: '2023', title: '1 MW Milestone', desc: 'Total installed capacity crossed 1 MW across residential, commercial & industrial.' },
  { year: '2024', title: '500+ Happy Customers', desc: '500+ families and businesses powered by clean solar energy across Assam.' },
  { year: '2025', title: 'Expanding Northeast', desc: 'Launching operations in Meghalaya, Nagaland, and Arunachal Pradesh.' },
];

export default function MilestoneTimeline() {
  return (
    <section id="milestones" className="section-padding bg-slate-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="section-title">
              8 Years of <span className="gradient-text">Solar Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.06}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full bg-green-600 border-2 border-white shadow -translate-x-1/2 mt-1.5 z-10" />

                  {/* Spacer (desktop) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                      <div className="text-yellow-500 font-display font-bold text-sm mb-1">{m.year}</div>
                      <div className="font-semibold text-slate-800 mb-1">{m.title}</div>
                      <div className="text-slate-500 text-sm">{m.desc}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
