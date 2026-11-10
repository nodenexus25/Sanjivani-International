import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ArtRoom() {
  return (
    <>
      <PageHero title="Art Room" subtitle="Where imagination takes shape and color." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" alt="Art room" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Creative Arts" title="Art, Music &amp; Dance" center={false} />
              <p>
                Dedicated spaces for art, music and dance provide students with opportunities to express
                themselves, explore their talents and appreciate diverse forms of creativity. These experiences
                nurture imagination, confidence, cultural awareness and artistic expression.
              </p>
              <ul>
                <li>Painting, sketching and craft to spark imagination</li>
                <li>Spaces that build confidence and cultural awareness</li>
                <li>Opportunities to explore and showcase individual talent</li>
                <li>A supportive environment for artistic expression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
