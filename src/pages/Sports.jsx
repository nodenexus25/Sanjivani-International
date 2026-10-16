import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Sports() {
  return (
    <>
      <PageHero title="Sports" subtitle="A sound mind in a sound body." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Physical Education" title="Sports & Athletics" center={false} />
              <p>
                The need for a sound mind in a sound body is known to all. For the overall development of
                students, involvement in activities is essential. Our comprehensive sports program ensures
                every student stays active and healthy.
              </p>
              <ul>
                <li>Cricket, football, basketball, and volleyball courts</li>
                <li>400m athletics track and field facilities</li>
                <li>Swimming pool and indoor sports complex</li>
                <li>Specialized coaching by national-level trainers</li>
                <li>Inter-house and inter-school competitions</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80" alt="Sports facilities" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Sports We Offer" />
          <div className={p.grid4}>
            {[
              { icon: 'ball', title: 'Cricket' },
              { icon: 'ball', title: 'Football' },
              { icon: 'ball', title: 'Basketball' },
              { icon: 'ball', title: 'Volleyball' },
              { icon: 'trophy', title: 'Athletics' },
              { icon: 'heart', title: 'Yoga' },
              { icon: 'music', title: 'Swimming' },
              { icon: 'star', title: 'Table Tennis' },
            ].map((s) => (
              <div key={s.title} className={p.featureCard} style={{ textAlign: 'center' }}>
                <Icon name={s.icon} size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
                <h3>{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
