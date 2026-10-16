import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navGroups } from '../data/navigation.js';
import Icon from './Icon.jsx';
import styles from './MegaMenu.module.css';

/**
 * MegaMenu — horizontal dropdown grouped by nav section.
 * Opens on hover (desktop) and click. Closes on outside click / Escape.
 */
export default function MegaMenu() {
  const [openIndex, setOpenIndex] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIndex(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const open = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 150);
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navGroups.map((group, i) => {
          // Direct link (no dropdown)
          if (group.to) {
            return (
              <li key={group.label} className={styles.item}>
                <Link to={group.to} className={styles.trigger}>
                  {group.label}
                </Link>
              </li>
            );
          }
          // Dropdown group
          return (
            <li
              key={group.label}
              className={styles.item}
              onMouseEnter={() => open(i)}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={styles.trigger}
                aria-haspopup="true"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {group.label}
                <Icon name="chevronDown" size={14} className={styles.chev} />
              </button>
              <div
                className={`${styles.dropdown} ${openIndex === i ? styles.open : ''}`}
                role="menu"
              >
                <div className={styles.dropdownInner}>
                  <h3 className={styles.groupTitle}>{group.label}</h3>
                  <ul className={styles.col}>
                    {group.items.map((it) => (
                      <li key={it.to}>
                        <Link to={it.to} className={styles.link} onClick={() => setOpenIndex(null)}>
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
