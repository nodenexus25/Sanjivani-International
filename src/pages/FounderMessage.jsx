import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function FounderMessage() {
  return (
    <>
      <PageHero title="Founder's Message" subtitle="The vision that started it all." />
      <section className={p.page}>
        <div className="container">
          <div className={p.messageCard}>
            <img
              src="/images/founder/founder-3.jpg"
              alt="Founder Chairman Late Shri Shankarrao Genuji Kolhe"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Dear Parents and Students,</h2>
              <p>
                Education is the most powerful weapon we can use to change the world. When Sanjivani
                International School was founded, the dream was simple — to create a place where every child is
                seen, heard, and inspired to reach their fullest potential.
              </p>
              <p>
                Over the years, that dream has grown into a vibrant community of learners, educators, and families.
                What has not changed is our unwavering commitment to excellence, integrity, and the belief that
                every child deserves an education that nurtures both the mind and the heart.
              </p>
              <p>
                I invite you to be a part of our journey — to walk with us as we shape the leaders, innovators,
                and changemakers of tomorrow.
              </p>
              <div className={p.signature}>
                Late Shri Shankarrao Genuji Kolhe
                <small>Founder Chairman, Sanjivani Rural Education Society</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
