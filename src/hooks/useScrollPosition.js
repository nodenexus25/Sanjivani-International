import { useEffect, useState } from 'react';

/**
 * useScrollPosition — tracks window scrollY.
 * @param {number} threshold - y-offset beyond which `scrolled` becomes true.
 * @returns [scrollY, scrolled]
 */
export default function useScrollPosition(threshold = 50) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return [scrollY, scrollY > threshold];
}
