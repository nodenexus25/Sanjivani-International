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
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
              alt="Founder Shri Rajesh Kumar"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Dear Parents and Students,</h2>
              <p>
                Education is the most powerful weapon we can use to change the world. When I founded Horizon
                Global School in 1997, my dream was simple — to create a place where every child is seen, heard,
                and inspired to reach their fullest potential.
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
                Shri Rajesh Kumar
                <small>Founder & Chairman Emeritus</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
