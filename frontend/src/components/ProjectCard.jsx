import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Zap } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { title, location, capacity, type, description, year, icon = '⚡', highlights = [] } = project;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 px-6 py-5 flex items-start justify-between gap-4">
        <div>
          <span className="text-green-300 text-xs font-semibold tracking-wider uppercase">{type}</span>
          <h3 className="font-display font-bold text-white text-base mt-0.5 leading-tight">{title}</h3>
        </div>
        <div className="text-3xl flex-shrink-0">{icon}</div>
      </div>

      <div className="p-5">
        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            {location}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Zap className="w-3.5 h-3.5 text-yellow-500" />
            {capacity}
          </div>
          {year && <div className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">{year}</div>}
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
