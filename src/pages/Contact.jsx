import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Icon from '../components/Icon.jsx';
import { contactInfo } from '../data/siteInfo.js';
import p from './page.module.css';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you." />
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Contact info */}
            <div className={styles.info}>
              <SectionHeading title="Get in Touch" center={false} />
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.icon}><Icon name="mapPin" size={20} /></span>
                  <div>
                    <strong>Address</strong>
                    <p>{contactInfo.address}</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}><Icon name="phone" size={20} /></span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a><br /><a href={`tel:${contactInfo.phoneAlt}`}>{contactInfo.phoneAlt}</a></p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}><Icon name="mail" size={20} /></span>
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}><Icon name="clock" size={20} /></span>
                  <div>
                    <strong>Office Hours</strong>
                    <p>{contactInfo.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              <SectionHeading title="Send a Message" center={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapWrap}>
            <iframe
              src={contactInfo.mapEmbed}
              title="Sanjivani International School location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
