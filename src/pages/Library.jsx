import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
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
                Information is the heartbeat of meaningful learning in schools. Exponential growth,
                availability, and access to information, particularly electronic information, has
                transformed how we learn. Our library is a vibrant hub of knowledge.
              </p>
              <ul>
                <li>10,000+ books across genres and subjects</li>
                <li>Digital resources and e-learning subscriptions</li>
                <li>Quiet reading zones and group study areas</li>
                <li>Weekly library classes and reading programs</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" alt="Library" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
