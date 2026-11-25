import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Library() {
  return (
    <>
      <PageHero title="Library" subtitle="A treasure trove of knowledge and imagination." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Reading & Research" title="School Library" center={false} />
              <p>
                Our well-stocked library opens doors to a world of knowledge, imagination and discovery. With a
                diverse collection of books and reading resources, it fosters a love for reading, strengthens
                language skills and encourages independent learning.
              </p>
              <ul>
                <li>A diverse collection of books and reading resources</li>
                <li>Fosters a love for reading and strengthens language skills</li>
                <li>Encourages independent learning and discovery</li>
                <li>Comfortable spaces for quiet reading and reference</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="/images/library/library-4.jpg" alt="Students reading in the school library" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Reading Comes Alive" subtitle="Book fairs, reading hours and activities that build a love for books." />
          <PhotoStrip
            photos={[
              { src: '/images/library/library-1.jpg', title: 'Book exhibition' },
              { src: '/images/library/library-2.jpg', title: 'Library book fair' },
              { src: '/images/library/library-3.jpg', title: 'Exploring new titles' },
              { src: '/images/library/library-5.jpg', title: 'Reading activity' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
