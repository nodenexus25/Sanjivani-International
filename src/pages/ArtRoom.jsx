import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import p from './page.module.css';

export default function ArtRoom() {
  return (
    <>
      <PageHero title="Art Room" subtitle="Where imagination takes shape and color." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="/images/art-craft/art-craft-2.jpg" alt="Students at work in the art room" loading="lazy" />
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
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="From Our Art Room" subtitle="Craft, colour and creativity in every session." />
          <PhotoStrip
            photos={[
              { src: '/images/art-craft/art-craft-3.jpg', title: 'Craft work' },
              { src: '/images/art-craft/art-craft-4.jpg', title: 'Art room gallery wall' },
              { src: '/images/art-craft/art-craft-6.jpg', title: 'Little artists at work' },
              { src: '/images/art-craft/art-craft-7.jpg', title: 'Creative display boards' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
