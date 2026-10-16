import React, { useState, useEffect, useCallback, useRef } from 'react';
import Icon from './Icon.jsx';
import styles from './Carousel.module.css';

/**
 * Carousel — generic responsive carousel with auto-advance + arrows + dots.
 * Children are the slides. `slidesToShow` controls visible items (responsive).
 * `responsive` array: [{ breakpoint: 768, slidesToShow: 2, slidesToScroll: 1 }]
 */
export default function Carousel({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  interval = 4000,
  autoPlay = true,
  arrows = true,
  dots = true,
  responsive = [],
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [show, setShow] = useState(slidesToShow);
  const [scroll, setScroll] = useState(slidesToScroll);
  const total = React.Children.count(children);
  const timer = useRef(null);

  // Determine slidesToShow / slidesToScroll based on viewport width
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      let sts = slidesToShow;
      let stsc = slidesToScroll;
      // Sort breakpoints descending so largest matching breakpoint wins
      const sorted = [...responsive].sort((a, b) => b.breakpoint - a.breakpoint);
      for (const r of sorted) {
        if (w <= r.breakpoint) {
          sts = r.slidesToShow ?? sts;
          stsc = r.slidesToScroll ?? stsc;
        }
      }
      setShow(sts);
      setScroll(stsc);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [slidesToShow, slidesToScroll, responsive]);

  const maxIndex = Math.max(0, total - show);
  const go = useCallback((i) => setIndex(Math.max(0, Math.min(i, maxIndex))), [maxIndex]);
  const next = useCallback(() => go(index + scroll > maxIndex ? 0 : index + scroll), [go, index, scroll, maxIndex]);
  const prev = useCallback(() => go(index - scroll < 0 ? maxIndex : index - scroll), [go, index, scroll, maxIndex]);

  useEffect(() => {
    if (!autoPlay || paused || total <= show) return;
    timer.current = setInterval(next, interval);
    return () => clearInterval(timer.current);
  }, [next, interval, paused, autoPlay, total, show]);

  // Reset index if total shrinks
  useEffect(() => { if (index > maxIndex) setIndex(maxIndex); }, [maxIndex, index]);

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.track}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${index * (100 / show)}%)` }}
        >
          {React.Children.map(children, (child, i) => (
            <div className={styles.slide} style={{ flex: `0 0 ${100 / show}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {arrows && total > show && (
        <>
          <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={prev} aria-label="Previous">
            <Icon name="chevronLeft" size={22} />
          </button>
          <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={next} aria-label="Next">
            <Icon name="chevronRight" size={22} />
          </button>
        </>
      )}

      {dots && total > show && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
