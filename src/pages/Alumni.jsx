import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const alumni = [
  {
    name: 'Devyani Landge',
    batch: 'Batch of 2023',
    achievement: 'Mechanical Engineering, VNIT Nagpur',
    quote:
      'From 2013, when I attended my first day of 1st standard, to 2023, when I wrote my last Xth Board Exam, I spent a decade at Sanjivani and grew up there in every sense. During those ten years I had participated on stage so many times — with the choir for Annual Day or alone for elocutions and debates — that performing felt natural, practised. SIS gave me my education, but more importantly it gave me the confidence to own myself in front of a massive crowd. I owe all of this and much more to all my teachers and mentors at SIS.',
  },
  {
    name: 'Alumnus — Head Boy',
    batch: 'Alumnus',
    achievement: 'SRMIST & IIT Madras · JP Morgan Chase · MD, Fresh & Select Groceries',
    quote:
      'The foundation of my academic and professional journey was undeniably laid at Sanjivani International School. The core values instilled in me during those formative years have been the bedrock of every milestone I have achieved since. Serving as Cultural Captain and later as Head Boy, alongside being honoured as Student of the Year, were my first real lessons in responsibility and community. The discipline, resilience and curiosity I developed at Sanjivani have been my guiding force.',
  },
  {
    name: 'Alumna — Head Girl',
    batch: 'Alumna',
    achievement: 'Occupational Therapy, Seth GS Medical College & KEM Hospital, Parel',
    quote:
      'Sanjivani has been and will always be a home for me. I joined in 4th Std, having come from Shimla, and the memories, experiences and journey at SIS have made me whatever I am today. I was able to serve as the Head Girl of the school in Grade Ten. Teachers in Sanjivani always felt like family, and they treated us like their own children. If someone asks me for one single word to describe Sanjivani, it would be "home".',
  },
];

export default function Alumni() {
  return (
    <>
      <PageHero title="Alumni" subtitle="Our pride, our ambassadors, our legacy." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading
            title="Our Alumni Network"
            subtitle="Our alumni are making their mark across the world — in technology, medicine, arts, sports and entrepreneurship."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
            {alumni.map((a) => (
              <div key={a.name} className={p.featureCard}>
                <Icon name="quote" size={28} style={{ color: 'var(--color-accent)', opacity: 0.5, marginBottom: '0.5rem' }} />
                <p style={{ fontStyle: 'italic' }}>“{a.quote}”</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '48px',
                      height: '48px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--color-primary)',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      border: '2px solid var(--color-accent)',
                    }}
                  >
                    {a.name
                      .split(/\s+/)
                      .filter((w) => /^[A-Za-z]/.test(w))
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')}
                  </span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-primary)' }}>{a.name}</strong>
                    <span style={{ display: 'block', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.8rem' }}>{a.batch}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{a.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
