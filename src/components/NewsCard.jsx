import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';

/**
 * NewsCard — news item with date badge, image, title, excerpt.
 */
export default function NewsCard({ item, compact = false }) {
  const d = new Date(item.date);
  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'short' });

  if (compact) {
    return (
      <article className={styles.compact}>
        <div className={styles.dateBadge}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
        </div>
        <div className={styles.body}>
          {item.category && <span className={styles.cat}>{item.category}</span>}
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.excerpt}>{item.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <Link to="/news" className={styles.card}>
      <div className={styles.image}>
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className={styles.dateOverlay}>
          <span className={styles.day}>{day}</span>
          <span className={styles.month}>{month}</span>
        </div>
      </div>
      <div className={styles.body}>
        {item.category && <span className={styles.cat}>{item.category}</span>}
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.excerpt}>{item.excerpt}</p>
      </div>
    </Link>
  );
}
