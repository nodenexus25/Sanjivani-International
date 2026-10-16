import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { contactInfo } from '../data/siteInfo.js';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';
import styles from './OnlineRegistration.module.css';

export default function OnlineRegistration() {
  return (
    <>
      <PageHero title="Online Registration" subtitle="Begin your child's journey at Sanjivani International School." />
      <section className={p.page}>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.formCol}>
              <SectionHeading eyebrow="Registration" title="Enquiry / Registration Form" center={false} />
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
                Fill in the form below and our admissions team will get back to you within 24 hours.
              </p>
              <EnquiryForm />
            </div>
            <aside className={styles.infoCol}>
              <h3 style={{ color: '#fff', marginBottom: 'var(--space-4)' }}>Need Help?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--space-5)' }}>
                Our admissions team is available to answer your questions and guide you through the process.
              </p>
              <ul className={styles.contactList}>
                <li><Icon name="phone" size={18} /><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
                <li><Icon name="mail" size={18} /><a href={`mailto:${contactInfo.emailAdmissions}`}>{contactInfo.emailAdmissions}</a></li>
                <li><Icon name="mapPin" size={18} /><span>{contactInfo.address}</span></li>
                <li><Icon name="clock" size={18} /><span>{contactInfo.hours}</span></li>
              </ul>
              <div className={styles.note}>
                <strong>Admissions Open for 2026-27</strong>
                <p>Limited seats available across all grades. Apply early to secure your child's place.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
