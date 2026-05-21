import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    id, name, category, description, price, features = [],
    capacity, warranty, icon = '⚡',
  } = product;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 p-6">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="text-green-300 text-xs font-semibold tracking-wider uppercase mb-1">{category}</div>
        <h3 className="font-display font-bold text-white text-lg leading-tight">{name}</h3>
        {capacity && <div className="text-green-200/70 text-xs mt-1">{capacity}</div>}
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-5">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            {price && <div className="font-bold text-green-800 text-base">{price}</div>}
            {warranty && <div className="text-slate-400 text-xs">{warranty} warranty</div>}
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-900 group-hover:gap-2 transition-all"
          >
            Get Quote <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
