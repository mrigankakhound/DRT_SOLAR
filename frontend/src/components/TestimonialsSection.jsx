import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Baruah',
    location: 'Jorhat, Assam',
    role: 'Homeowner',
    rating: 5,
    text: 'DRT ENTERPRISE installed a 5kW system on our rooftop in just 3 days. Our electricity bill dropped from ₹4,500 to under ₹200 per month. The team was professional and explained everything clearly. Absolutely worth it!',
    initials: 'RB',
    color: 'bg-green-600',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Dispur, Assam',
    role: 'Restaurant Owner',
    rating: 5,
    text: 'Running a restaurant means massive electricity bills. After DRT installed a 15kW commercial system, we save over ₹25,000 every month. The ROI has been incredible. Highly recommend to any business owner.',
    initials: 'PS',
    color: 'bg-blue-600',
  },
  {
    id: 3,
    name: 'Amit Gogoi',
    location: 'Jorhat, Assam',
    role: 'Farmer',
    rating: 5,
    text: 'The solar water pump they installed has changed my farming life. No more diesel costs, no more power cuts. Water runs day and night for my fields. DRT handled the government subsidy paperwork for me too!',
    initials: 'AG',
    color: 'bg-amber-600',
  },
  {
    id: 4,
    name: 'Mrinmoy Das',
    location: 'Tezpur, Assam',
    role: 'School Principal',
    rating: 5,
    text: 'We installed a 25kW system for our school. The energy savings fund new books and labs for students. DRT provided excellent after-sales service and the monitoring app is very useful.',
    initials: 'MD',
    color: 'bg-purple-600',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase bg-green-50 px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="section-title">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-slate-50 rounded-3xl p-8 md:p-10 relative"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-green-100" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role} · {t.location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-green-600 w-8' : 'bg-slate-300 w-4'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 hover:border-green-600 hover:text-green-700 flex items-center justify-center text-slate-500 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full border border-slate-200 hover:border-green-600 hover:text-green-700 flex items-center justify-center text-slate-500 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
