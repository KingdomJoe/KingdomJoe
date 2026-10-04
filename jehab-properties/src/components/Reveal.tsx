import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Tasteful scroll-reveal: a short fade + rise as content enters the viewport.
 * Respects prefers-reduced-motion via MotionConfig in App.
 */
export function Reveal({ children, delay = 0, y = 14, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px 50px 0px' }}
      transition={{ duration: 0.35, delay: Math.min(delay, 0.1), ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
