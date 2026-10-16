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
              <SectionHeading eyebrow="Performing Arts" title="Music & Dance Studio" center={false} />
              <p>
                This is the place where young musicians start their journey to become great composers, and
                where children unwind and learn the aesthetics of movement. Our Music & Dance studios are
                equipped with a variety of instruments and dedicated practice spaces.
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
