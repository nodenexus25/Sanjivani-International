import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ScienceLab() {
  return (
    <>
      <PageHero title="Science Laboratories" subtitle="Hands-on experimentation brings concepts to life." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Campus" title="Science Laboratories" center={false} />
              <p>
                Our well-equipped science laboratories provide a hands-on learning environment where curiosity
                takes birth and scientific thinking flourishes. Through observation, experimentation and
                exploration, students connect classroom concepts with real-world applications.
              </p>
              <ul>
                <li>Hands-on experimentation across Physics, Chemistry and Biology</li>
                <li>Anatomy models and science kits that simplify complex theories</li>
                <li>Observation and exploration that link concepts to real life</li>
                <li>A safe, supervised environment for scientific inquiry</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" alt="Science Laboratory" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
