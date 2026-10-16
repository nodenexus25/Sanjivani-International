import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import EventCard from '../components/EventCard.jsx';
import { events } from '../data/events.js';

export default function RecentEvents() {
  const recent = events.filter((e) => e.type === 'recent');
  return (
    <>
      <PageHero title="Recent Events" subtitle="Memorable moments from our campus." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Recent Events" subtitle="A look back at the events that made our year special." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
            {recent.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
