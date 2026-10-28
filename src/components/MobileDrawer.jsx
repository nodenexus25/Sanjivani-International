import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navGroups } from '../data/navigation.js';
import Icon from './Icon.jsx';
import styles from './MobileDrawer.module.css';

/**
 * MobileDrawer — slide-in from the right with accordion submenus.
 */
export default function MobileDrawer({ open, onClose }) {
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const toggleGroup = (label) => {
    setActiveGroup((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`${styles.drawer} ${open ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.head}>
          <span className={styles.title}>Menu</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navGroups.map((group) => {
              // Direct link
              if (group.to) {
                return (
                  <li key={group.label}>
                    <Link to={group.to} className={styles.homeLink} onClick={onClose}>
                      {group.label}
                    </Link>
                  </li>
                );
              }
              // Accordion group
              return (
                <li key={group.label}>
                  <button
                    type="button"
                    className={styles.groupBtn}
                    aria-expanded={activeGroup === group.label}
                    onClick={() => toggleGroup(group.label)}
                  >
                    <span>{group.label}</span>
                    <Icon
                      name="chevronDown"
                      size={16}
                      className={`${styles.chev} ${activeGroup === group.label ? styles.chevOpen : ''}`}
                    />
                  </button>
                  <ul className={`${styles.subList} ${activeGroup === group.label ? styles.subOpen : ''}`}>
                    {group.items.map((it) => (
                      <li key={it.to}>
                        <Link to={it.to} className={styles.subLink} onClick={onClose}>
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
