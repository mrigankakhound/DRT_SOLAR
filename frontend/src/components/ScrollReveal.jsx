import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Wraps children in a Framer Motion scroll-reveal animation.
 * @param {number} delay - stagger delay in seconds (default 0)
 * @param {string} className - additional classes
 */
export default function ScrollReveal({ children, delay = 0, className = '', once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
