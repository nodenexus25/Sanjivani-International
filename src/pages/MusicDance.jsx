import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import p from './page.module.css';

export default function MusicDance() {
  return (
    <>
      <PageHero title="Music & Dance" subtitle="Where creativity finds its rhythm." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="/images/music-theatre/music-theatre-2.jpg" alt="Students performing a dance on stage" loading="lazy" />
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
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="On Stage" subtitle="Dance, drama and music performances by our students." />
          <PhotoStrip
            photos={[
              { src: '/images/music-theatre/music-theatre-4.jpg', title: 'Dance drama' },
              { src: '/images/music-theatre/music-theatre-8.jpg', title: 'Folk dance performance' },
              { src: '/images/music-theatre/music-theatre-5.jpg', title: 'Theatre production' },
              { src: '/images/music-theatre/music-theatre-3.jpg', title: 'Classroom on stage — a play' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
