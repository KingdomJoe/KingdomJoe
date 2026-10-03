import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

import { formatNumber } from '@/lib/utils';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

/** Animated integer that counts up when scrolled into view. */
export function CountUp({ to, prefix = '', suffix = '', duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
