import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const RATE_PER_UNIT = 7.5; // ₹ per kWh (Assam avg)
const SOLAR_COST_PER_KW = 55000; // ₹ per kW installed
const SUBSIDY_LIMIT = 85000; // PM Surya Ghar max subsidy

export default function SavingsCalculator() {
  const [bill, setBill] = useState(3000);

  const monthlyUnits = bill / RATE_PER_UNIT;
  const systemKw = Math.max(1, Math.round(monthlyUnits / 120));
  const annualSavings = Math.round(bill * 0.85 * 12);
  const systemCost = systemKw * SOLAR_COST_PER_KW;
  const subsidy = Math.min(SUBSIDY_LIMIT, systemKw <= 2 ? 45000 : systemKw === 3 ? 85000 : 85000);
  const netCost = Math.max(0, systemCost - subsidy);
  const paybackYears = netCost > 0 ? (netCost / annualSavings).toFixed(1) : 0;

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Savings Calculator
            </span>
            <h2 className="section-title">
              How Much Can You <span className="gradient-text">Save?</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Enter your monthly electricity bill to get an instant solar savings estimate.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="font-medium text-slate-700 text-sm">Monthly Electricity Bill</label>
              <span className="font-display font-bold text-green-700 text-xl">
                ₹{bill.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={50000}
              step={500}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #16a34a ${(bill / 50000) * 100}%, #e2e8f0 ${(bill / 50000) * 100}%)`
              }}
              id="bill-slider"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>₹500</span><span>₹50,000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              key={bill}
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-600 rounded-2xl p-5 text-white"
            >
              <TrendingDown className="w-5 h-5 mb-2 opacity-80" />
              <div className="font-display font-bold text-2xl">
                ₹{annualSavings.toLocaleString('en-IN')}
              </div>
              <div className="text-green-100 text-xs mt-1">Annual Savings</div>
            </motion.div>

            <motion.div
              key={bill + 'kw'}
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-yellow-400 rounded-2xl p-5"
            >
              <Zap className="w-5 h-5 mb-2 text-green-800 opacity-80" />
              <div className="font-display font-bold text-2xl text-green-900">{systemKw} kW</div>
              <div className="text-green-800/70 text-xs mt-1">Recommended System</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'System Cost', value: `₹${(systemCost / 100000).toFixed(1)}L` },
              { label: 'Govt. Subsidy', value: `₹${(subsidy / 1000).toFixed(0)}K` },
              { label: 'Payback', value: `${paybackYears} yrs` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-display font-bold text-lg text-slate-800">{value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs text-center">
            * Estimates based on Assam average tariff of ₹7.50/unit. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
