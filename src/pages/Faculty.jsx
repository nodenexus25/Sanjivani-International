import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { faculty } from '../data/faculty.js';
import p from './page.module.css';
import styles from './Faculty.module.css';

export default function Faculty() {
  return (
    <>
      <PageHero title="Our Faculty" subtitle="Passionate educators dedicated to every child's success." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading
            title="Meet Our Teachers"
            subtitle="Our faculty brings together years of experience, expertise, and a genuine love for teaching."
          />
          <div className={styles.grid}>
            {faculty.map((m) => (
              <div key={m.id} className={styles.card}>
                <div className={styles.image}>
                  {m.image ? (
                    <img src={m.image} alt={m.name} loading="lazy" />
                  ) : (
                    <span className={styles.initials} aria-hidden="true">
                      {m.name
                        .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, '')
                        .split(/\s+/)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  )}
                </div>
                <div className={styles.info}>
                  <h3>{m.name}</h3>
                  <span className={styles.role}>{m.role}</span>
                  <span className={styles.qual}>{m.qualification}</span>
                  <p>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
