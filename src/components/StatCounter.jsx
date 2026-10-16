import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView.js';
import styles from './StatCounter.module.css';

/**
 * StatCounter — animates a number from 0 to `value` when scrolled into view.
 */
export default function StatCounter({ value, suffix = '', label, duration = 1800 }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  const formatted = value >= 1000
    ? `${(display / 1000).toFixed(display >= value ? 0 : 1)}k`
    : display;

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.value}>{formatted}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
