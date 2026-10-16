import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileDrawer from './MobileDrawer.jsx';
import Icon from './Icon.jsx';
import useScrollPosition from '../hooks/useScrollPosition.js';
import styles from './Header.module.css';

export default function Header() {
  const [, shrunk] = useScrollPosition(40);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${shrunk ? styles.shrunk : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.logo} aria-label="Sanjivani International School home">
            <LogoMark />
            <div className={styles.logoText}>
              <span className={styles.schoolName}>Sanjivani International</span>
              <span className={styles.tagline}>School</span>
            </div>
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span className={styles.menuLabel}>MENU</span>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

function LogoMark() {
  return (
    <img
      src="/sis-logo-gold.jpg"
      alt="Sanjivani International School logo"
      className={styles.logoMark}
      width="68"
      height="68"
    />
  );
}
