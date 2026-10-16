import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function MissionVision() {
  return (
    <>
      <PageHero title="Vision & Mission" subtitle="Our guiding principles shape every child's journey." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.featureCard} style={{ padding: 'var(--space-7)' }}>
              <Icon name="eye" size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--color-primary)' }}>Our Vision</h2>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                To create individuals who are capable of evolving creatively, confidently with conviction.
              </p>
            </div>
            <div className={p.featureCard} style={{ padding: 'var(--space-7)' }}>
              <Icon name="target" size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--color-primary)' }}>Our Mission</h2>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                To strike a balance in upholding the cardinal values of our country on one hand and the ideals of a
                progressive modern global society on the other.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Our Motto" subtitle="The philosophy that drives everything we do." />
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', maxWidth: '700px', margin: '0 auto' }}>
            &ldquo;Education for Enrichment, Enhancement and Excellence&rdquo;
          </p>
        </div>
      </section>

      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className={p.grid4}>
            {[
              { icon: 'star', title: 'Excellence', desc: 'Striving for the highest standards in all endeavors.' },
              { icon: 'heart', title: 'Integrity', desc: 'Honesty, transparency, and ethical conduct in every action.' },
              { icon: 'user', title: 'Respect', desc: 'Valuing every individual and celebrating diversity.' },
              { icon: 'globe', title: 'Responsibility', desc: 'Accountability toward our students, community, and planet.' },
            ].map((v) => (
              <div key={v.title} className={p.featureCard} style={{ textAlign: 'center' }}>
                <Icon name={v.icon} size={32} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
