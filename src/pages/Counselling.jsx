import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function Counselling() {
  return (
    <>
      <PageHero title="Counselling" subtitle="Supporting every student's emotional and academic well-being." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock} style={{ maxWidth: 720, margin: '0 auto' }}>
            <SectionHeading title="Counselling" center={false} />
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-primary)' }}>
              &ldquo;When the sun is shining I can do anything; no mountain is too high, no trouble too difficult
              to overcome.&rdquo; — Wilma Rudolph
            </p>
            <p>
              We offer counselling to help students work through their difficulty, understand themselves better
              and find ways of managing their situation. Counseling facility include psychological, mental or
              emotional, educational and career counseling.
            </p>
            <p>
              The idea is to guide and assist students throughout their study at the institute, providing
              appropriate assistance at each stage of the student&rsquo;s development, growth and progress.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
