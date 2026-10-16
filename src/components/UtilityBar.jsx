import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { contactInfo } from '../data/siteInfo.js';
import styles from './UtilityBar.module.css';

export default function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contact}>
          <a href={`tel:${contactInfo.phone}`} className={styles.item}>
            <Icon name="phone" size={14} />
            <span>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className={styles.item}>
            <Icon name="mail" size={14} />
            <span>{contactInfo.email}</span>
          </a>
        </div>
        <div className={styles.actions}>
          <div className={styles.social} aria-label="Social media">
            <a href={contactInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <Icon name="facebook" size={14} />
            </a>
            <a href={contactInfo.social.twitter} aria-label="X / Twitter" target="_blank" rel="noreferrer">
              <Icon name="twitter" size={14} />
            </a>
            <a href={contactInfo.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <Icon name="youtube" size={14} />
            </a>
            <a href={contactInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Icon name="instagram" size={14} />
            </a>
          </div>
          <Link to="/contact" className={styles.btnPrimary}>Enquire Now</Link>
          <Link to="/online-registration" className={styles.btnAccent}>Online Registration</Link>
        </div>
      </div>
    </div>
  );
}
