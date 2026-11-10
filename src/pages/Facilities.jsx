import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className={p.contentBlock} style={{ marginBottom: 'var(--space-7)' }}>
            <p>
              At Sanjivani International School, Kharghar, we believe that an inspiring environment is integral to
              meaningful learning. Our thoughtfully designed campus combines modern infrastructure, well-equipped
              learning spaces and student-centred facilities to embrace contemporary teaching methodologies. Every
              space is envisioned to spark curiosity, nurture creativity, encourage exploration and promote physical,
              intellectual, social and emotional well-being.
            </p>
            <p>
              With a strong emphasis on safety, comfort and holistic development, we strive to provide every child
              with a secure, stimulating and enriching environment to learn, grow and thrive.
            </p>
          </div>
          <SectionHeading title="Our Facilities" subtitle="Purpose-built spaces that prioritize genuine educational growth." />
          <div className={p.grid3}>
            {facilities.map((f) => (
              <Link key={f.id} to={f.link} className={`${p.featureCard} ${p.featureCardLink}`}>
                <Icon name={f.icon} size={36} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.blurb}</p>
                <span className={p.cardMore}>
                  Learn More <Icon name="arrowRight" size={14} />
                </span>
              </Link>
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
                <li>Well-equipped science, computer and robotics laboratories</li>
                <li>Library with a diverse collection of books and reading resources</li>
                <li>State-of-the-art swimming pool with trainers</li>
                <li>Outdoor turf with a basketball court and indoor games room</li>
                <li>Safe in-house transport fleet</li>
              </ul>
              <p>
                At Sanjivani International School, Kharghar, every facility serves a purpose beyond
                infrastructure — it creates opportunities for discovery, expression, innovation and growth.
                Together, our learning spaces provide a safe, stimulating and nurturing environment for the holistic
                development of every learner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
