import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function SwimmingPool() {
  return (
    <>
      <PageHero title="Swimming Pool" subtitle="A state-of-the-art pool for fitness and confidence." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="/swimming-pool.jpg" alt="Sanjivani International School swimming pool" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Campus" title="Swimming Pool" center={false} />
              <p>
                Sanjivani International School has a state of art swimming pool in the school campus. We have full
                time trainers and guards at the pool, with all the facilities which includes changing rooms,
                showers, floats etc.
              </p>
              <p>
                We educate children about water and swimming so that they don&rsquo;t develop a fear for it later
                in life, which allows them to have fun in the water and become experienced swimmers.
              </p>
              <ul>
                <li>Full-time qualified trainers and lifeguards</li>
                <li>Separate changing rooms and shower facilities</li>
                <li>Safety equipment and floats for beginners</li>
                <li>Regular swimming sessions as part of the curriculum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
