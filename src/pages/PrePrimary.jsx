import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function PrePrimary() {
  return (
    <>
      <PageHero title="Pre-Primary" subtitle="A joyful start to lifelong learning." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Early Years" title="Pre-Primary Program" center={false} />
              <p>
                Our Pre-Primary program (Nursery, LKG, UKG) is designed around the natural curiosity of young
                children. We follow a play-based, child-centered approach that nurtures social, emotional,
                cognitive, and physical development in a warm and secure environment.
              </p>
              <p>
                Through storytelling, music, art, and sensory play, our little learners build a strong
                foundation in language, numeracy, and social skills — all while having fun.
              </p>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80" alt="Pre-primary classroom" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Key Focus Areas" />
          <div className={p.grid4}>
            {[
              { icon: 'book', title: 'Language & Literacy', desc: 'Phonics, storytelling, and early reading.' },
              { icon: 'calculator', title: 'Numeracy', desc: 'Counting, patterns, and basic concepts through play.' },
              { icon: 'palette', title: 'Creative Arts', desc: 'Painting, crafts, music, and movement.' },
              { icon: 'heart', title: 'Social-Emotional', desc: 'Sharing, empathy, and self-regulation.' },
            ].map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={30} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
