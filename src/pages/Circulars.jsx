import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CircularItem from '../components/CircularItem.jsx';
import { circulars } from '../data/circulars.js';

export default function Circulars() {
  return (
    <>
      <PageHero title="Circulars" subtitle="Important notices and announcements for parents and students." />
      <section className="section">
        <div className="container">
          <SectionHeading title="All Circulars" subtitle="Download the latest circulars and notices here." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '900px', margin: '0 auto' }}>
            {circulars.map((c) => (
              <CircularItem key={c.id} circular={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
