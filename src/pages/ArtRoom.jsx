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
              <SectionHeading eyebrow="Creative Arts" title="Art Room" center={false} />
              <p>
                Exposure to art and craft activities adds color, joy, and beauty to the lives of students,
                enhancing their creativity and self-expression. Our Art Room is a vibrant space designed to
                inspire artistic exploration.
              </p>
              <ul>
                <li>Painting, sketching, and mixed media</li>
                <li>Crafts, clay modeling, and pottery</li>
                <li>Exhibitions showcasing student artwork</li>
                <li>Workshops by visiting artists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
