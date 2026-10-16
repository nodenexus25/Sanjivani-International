import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Disclosure() {
  return (
    <>
      <PageHero title="Disclosure" subtitle="Transparency and accountability in all our operations." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Public Disclosures" subtitle="As part of our commitment to transparency, we make the following information publicly available." />
          <div className={p.grid2}>
            {[
              { title: 'School Information', items: ['Establishment year: 2006', 'Affiliation: ICSE', 'Medium of instruction: English', 'Classes offered: Nursery to Class X', 'Managing Society: Sanjivani Rural Education Society (SRES)'] },
              { title: 'Academic Details', items: ['Board: ICSE (customised to individual needs)', 'Medium of instruction: English', '100% ICSE results year after year', 'Activity-based learning with digital classrooms'] },
              { title: 'Infrastructure', items: ['Digitally enabled AC classrooms', 'Science & computer laboratories', 'Library, swimming pool, sports grounds', 'Canteen, medical room, transport'] },
              { title: 'Financial Information', items: ['Fee structure available on request', 'Fees payable quarterly', 'Scholarship programs for deserving students'] },
            ].map((c) => (
              <div key={c.title} className={p.featureCard}>
                <h3>{c.title}</h3>
                <ul>{c.items.map((it) => <li key={it} style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-7)', padding: 'var(--space-6)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-xl)', borderLeft: '4px solid var(--color-accent)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <Icon name="info" size={24} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>Request for Information</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  For any additional information or documents not listed here, please contact the school office at{' '}
                  <a href="mailto:contactsis@sanjivani.org.in">contactsis@sanjivani.org.in</a> or call{' '}
                  <a href="tel:+919920795060">+91-9920795060</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
