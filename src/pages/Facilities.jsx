import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import { facilities } from '../data/facilities.js';
import p from './page.module.css';

export default function Facilities() {
  return (
    <>
      <PageHero title="Facilities" subtitle="World-class infrastructure designed for holistic learning." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Our Facilities" subtitle="Purpose-built spaces that prioritize genuine educational growth." />
          <div className={p.grid3}>
            {facilities.map((f) => (
              <div key={f.id} className={p.featureCard}>
                <Icon name={f.icon} size={36} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Campus Highlights" />
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="/campus-aerial.jpg" alt="Sanjivani International School campus aerial view" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <h3>A Campus Built for Learning</h3>
              <p>
                Sanjivani International School&rsquo;s campus features well-ventilated, tech-equipped classrooms,
                updated science and computer labs, dedicated arts studios, and excellent sports grounds. We
                intentionally focus on providing high-quality, highly functional spaces that prioritize genuine
                educational growth.
              </p>
              <ul>
                <li>Digitally enabled, air-conditioned classrooms</li>
                <li>Well-equipped science and computer laboratories</li>
                <li>Library with encyclopedias, journals, and newspapers</li>
                <li>State-of-the-art swimming pool with trainers</li>
                <li>Sprawling sports grounds for multiple disciplines</li>
                <li>Safe in-house transport fleet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
