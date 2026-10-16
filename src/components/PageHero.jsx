import React from 'react';
import styles from './PageHero.module.css';

/**
 * PageHero — full-width banner for inner pages with title + background image.
 */
export default function PageHero({ title, subtitle, image }) {
  const bg = image
    ? { backgroundImage: `linear-gradient(rgba(26,20,16,0.65), rgba(122,31,43,0.78)), url(${image})` }
    : { background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)' };
  return (
    <section className={styles.hero} style={bg} aria-label={title}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
