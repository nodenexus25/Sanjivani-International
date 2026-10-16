import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function MedhaviAwards() {
  return (
    <>
      <PageHero title="Medhavi Awards" subtitle="Recognising academic brilliance among our students." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock} style={{ maxWidth: 720, margin: '0 auto' }}>
            <p>
              The Medhavi Awards honour students who have demonstrated exceptional academic achievement throughout
              the year. This recognition motivates our learners to pursue excellence and serves as an inspiration
              for their peers.
            </p>
            <p>
              Award winners are selected based on their consistent performance, dedication, and overall academic
              record. The awards are presented annually during a special ceremony attended by students, parents,
              and faculty.
            </p>
            <p>
              <strong>Note:</strong> The complete list of Medhavi Award winners will be updated here as and when
              the school releases it. Please contact the school office for the latest details.
            </p>
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="How Medhavi Awards Work" />
          <div className={p.grid3}>
            {[
              { step: '01', title: 'Eligibility', desc: 'Students with consistent academic performance throughout the year are considered.' },
              { step: '02', title: 'Evaluation', desc: 'A committee reviews marks, attendance, and overall conduct.' },
              { step: '03', title: 'Recognition', desc: 'Winners receive certificates and mementoes at the annual ceremony.' },
            ].map((s) => (
              <div key={s.step} className={p.featureCard} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-accent)' }}>{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
