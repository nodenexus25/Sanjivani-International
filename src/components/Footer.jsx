import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Button from './Button.jsx';
import { contactInfo } from '../data/siteInfo.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const aboutLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/mission-vision', label: 'Vision & Mission' },
    { to: '/founder-message', label: "Founder's Message" },
    { to: '/chairperson-message', label: "Chairman's Message" },
    { to: '/executive-trustee', label: "Executive Trustee's Message" },
    { to: '/managing-trustee', label: "Managing Trustee's Message" },
    { to: '/principal-message', label: "Principal's Message" },
    { to: '/school-song', label: 'School Song' },
  ];

  const admissionLinks = [
    { to: '/why-sis', label: 'Why SIS?' },
    { to: '/admission-process', label: 'Admission Process' },
    { to: '/fee-structure', label: 'Fee Structure' },
    { to: '/online-registration', label: 'Online Registration' },
    { to: '/admission-form', label: 'Admission Form' },
  ];

  const academicsLinks = [
    { to: '/learning-environment', label: 'Curriculum & Teaching' },
    { to: '/examination', label: 'Examination Pattern' },
    { to: '/faculty', label: 'Teaching Staff' },
    { to: '/circulars', label: 'Notice & Circulars' },
  ];

  const moreLinks = [
    { to: '/facilities', label: 'Facilities' },
    { to: '/photo-gallery', label: 'Gallery' },
    { to: '/downloads', label: 'Downloads' },
    { to: '/blog', label: 'Blog' },
    { to: '/alumni', label: 'Alumni' },
    { to: '/career', label: 'Careers' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand + contact */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <img src="/sis-logo-gold.jpg" alt={contactInfo.schoolName} className={styles.logo} />
              <div>
                <h3 className={styles.brand}>{contactInfo.schoolName}</h3>
                <p className={styles.est}>EST. {contactInfo.founded} · KHARGHAR</p>
              </div>
            </div>
            <p className={styles.trust}>{contactInfo.parentBody}</p>
            <ul className={styles.contactList}>
              <li>
                <Icon name="mapPin" size={16} />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
            <div className={styles.social}>
              <a href={contactInfo.social.facebook} aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href={contactInfo.social.youtube} aria-label="YouTube"><Icon name="youtube" size={18} /></a>
              <a href={contactInfo.social.instagram} aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href={contactInfo.social.twitter} aria-label="X / Twitter"><Icon name="twitter" size={18} /></a>
            </div>
          </div>

          {/* About */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>About</h4>
            <ul className={styles.linkList}>
              {aboutLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Admission */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Admission</h4>
            <ul className={styles.linkList}>
              {admissionLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Academics</h4>
            <ul className={styles.linkList}>
              {academicsLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>More</h4>
            <ul className={styles.linkList}>
              {moreLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
            <p className={styles.newsText}>Subscribe for updates</p>
            <form
              className={styles.newsForm}
              onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing! (demo)'); }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email for newsletter"
                className={styles.newsInput}
              />
              <Button type="submit" variant="accent" size="sm">
                <Icon name="send" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {year} {contactInfo.schoolName}. All rights reserved.</p>
          <ul className={styles.bottomLinks}>
            <li><Link to="/disclosure">Disclosure</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
