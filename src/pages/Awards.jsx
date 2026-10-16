import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';
import { awards } from '../data/siteInfo.js';

export default function Awards() {
  return (
    <>
      <PageHero title="Awards & Recognition" subtitle="Honours that inspire us to strive for excellence." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="School Awards" subtitle="Recognition for excellence in academics, sports, and administration." />
          <div className={p.grid3}>
            {awards.map((a) => (
              <div key={a.id} className={p.featureCard} style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, margin: '0 auto 1rem', borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '1.5rem' }}>
                  ★
                </div>
                <h3>{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Recognition at a Glance" />
          <div className={p.contentBlock} style={{ maxWidth: 800, margin: '0 auto' }}>
            <ul>
              <li>Best International School of Navi Mumbai — Brainfeed magazine survey, 2017</li>
              <li>ISA (International School Award) — British Council awardee</li>
              <li>NABET certified educational institute</li>
              <li>100% ICSE results year after year</li>
              <li>Prominent School in Sports</li>
              <li>Best Day Boarding School</li>
              <li>School Publication award</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
