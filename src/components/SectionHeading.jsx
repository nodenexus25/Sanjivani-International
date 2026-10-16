import React from 'react';
import styles from './SectionHeading.module.css';

/**
 * SectionHeading — consistent heading block with eyebrow, title, and subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div
      className={`${styles.wrap} ${center ? styles.center : ''} ${light ? styles.light : ''}`}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.divider} aria-hidden="true" />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
