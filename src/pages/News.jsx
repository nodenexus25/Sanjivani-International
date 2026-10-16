import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import NewsCard from '../components/NewsCard.jsx';
import { news } from '../data/news.js';

export default function News() {
  return (
    <>
      <PageHero title="News" subtitle="Stay updated with the latest from Sanjivani International School." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Latest News" subtitle="Announcements, achievements, and stories from our school." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
            {news.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
