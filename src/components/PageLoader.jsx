import React from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.spinner} />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
