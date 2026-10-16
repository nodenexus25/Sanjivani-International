import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

const alumni = [
  { name: 'Aarav Sharma', batch: '2018', achievement: 'Software Engineer at a leading tech firm', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Diya Patel', batch: '2016', achievement: 'Medical student at AIIMS', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vihaan Gupta', batch: '2015', achievement: 'Entrepreneur & Startup Founder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ananya Singh', batch: '2019', achievement: 'National-level Badminton Player', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kabir Nair', batch: '2017', achievement: 'Research Scholar at IIT', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80' },
  { name: 'Myra Verma', batch: '2020', achievement: 'Young Artist & Designer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
];

export default function Alumni() {
  return (
    <>
      <PageHero title="Alumni" subtitle="Our pride, our ambassadors, our legacy." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading
            title="Our Alumni Network"
            subtitle="Our alumni are making their mark across the world — in technology, medicine, arts, sports, and entrepreneurship."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-5)' }}>
            {alumni.map((a) => (
              <div key={a.name} className={p.featureCard} style={{ textAlign: 'center' }}>
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', border: '3px solid var(--color-accent)' }}
                />
                <h3>{a.name}</h3>
                <span style={{ display: 'block', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>Batch of {a.batch}</span>
                <p>{a.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
