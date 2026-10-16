import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import styles from './HeroSlider.module.css';

/**
 * HeroSlider — full-width auto-rotating slider with arrows + dots.
 */
export default function HeroSlider({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const count = slides.length;
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused || count <= 1) return;
    timer.current = setInterval(next, interval);
    return () => clearInterval(timer.current);
  }, [next, interval, paused, count]);

  return (
    <section
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${count}`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={styles.bg}
          />
          <div className={styles.overlay} />
          <div className={`container ${styles.content}`}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            {slide.ctaLabel && (
              <Link to={slide.ctaLink} className={styles.cta}>
                {slide.ctaLabel}
                <Icon name="arrowRight" size={18} />
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Arrows */}
      {count > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={prev}
            aria-label="Previous slide"
          >
            <Icon name="chevronLeft" size={28} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={next}
            aria-label="Next slide"
          >
            <Icon name="chevronRight" size={28} />
          </button>

          {/* Dots */}
          <div className={styles.dots} role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
