import React from 'react';
import Icon from './Icon.jsx';
import styles from './CircularItem.module.css';

/**
 * CircularItem — a list row for a circular with date, category, download link.
 */
export default function CircularItem({ circular }) {
  const d = new Date(circular.date).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Icon name="file" size={22} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{circular.title}</h4>
        <div className={styles.meta}>
          <span><Icon name="calendar" size={13} /> {d}</span>
          {circular.category && <span className={styles.cat}>{circular.category}</span>}
        </div>
      </div>
      <a href={circular.file} className={styles.download} download aria-label={`Download ${circular.title}`}>
        <Icon name="download" size={16} />
        <span>Download</span>
      </a>
    </div>
  );
}
