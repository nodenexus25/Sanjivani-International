import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import EventCard from '../components/EventCard.jsx';
import { events } from '../data/events.js';

export default function UpcomingEvents() {
  const upcoming = events.filter((e) => e.type === 'upcoming');
  return (
    <>
      <PageHero title="Upcoming Events" subtitle="Mark your calendars for these exciting events." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Upcoming Events" subtitle="Join us for these upcoming activities and celebrations." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
