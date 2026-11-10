import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function MusicDance() {
  return (
    <>
      <PageHero title="Music & Dance" subtitle="Where creativity finds its rhythm." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="Music and dance studio" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Performing Arts" title="Music &amp; Dance Studio" center={false} />
              <p>
                Our dedicated music and dance studios give students the opportunity to express themselves,
                explore their talents and appreciate diverse forms of creativity. These experiences nurture
                imagination, confidence, cultural awareness and artistic expression.
              </p>
              <ul>
                <li>Vocal music — Indian classical and Western</li>
                <li>Instrumental training — keyboard, guitar, tabla, drums</li>
                <li>Classical and contemporary dance forms</li>
                <li>Regular performances and inter-house competitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
