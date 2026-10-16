import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navGroups } from '../data/navigation.js';
import styles from './Breadcrumb.module.css';

/**
 * Breadcrumb — auto-generates from current path, matching nav labels.
 */
export default function Breadcrumb() {
  const { pathname } = useLocation();

  // Build a flat map of path -> label for all nav items.
  const labelMap = {};
  navGroups.forEach((g) => {
    labelMap[g.label.toLowerCase()] = g.label;
    if (g.items) {
      g.items.forEach((it) => {
        labelMap[it.to] = it.label;
      });
    }
  });

  const segments = pathname.split('/').filter(Boolean);
  let built = '';

  const crumbs = segments.map((seg, i) => {
    built += `/${seg}`;
    const label = labelMap[built] || labelMap[`/${seg}`] || formatLabel(seg);
    const isLast = i === segments.length - 1;
    return { label, to: built, isLast };
  });

  return (
    <nav className={styles.bar} aria-label="Breadcrumb">
      <div className={`container ${styles.inner}`}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.sep}>/</span>
              {c.isLast ? (
                <span className={styles.current} aria-current="page">{c.label}</span>
              ) : (
                <Link to={c.to} className={styles.link}>{c.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function formatLabel(seg) {
  return seg
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
