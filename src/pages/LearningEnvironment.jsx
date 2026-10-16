import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function LearningEnvironment() {
  return (
    <>
      <PageHero title="Learning Environment" subtitle="A campus designed to inspire and engage." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock}>
            <SectionHeading title="Where Learning Comes Alive" center={false} />
            <p>
              At Sanjivani International School, we believe that the learning environment plays a crucial role in a
              child's development. Our campus is thoughtfully designed to stimulate curiosity, encourage
              collaboration, and support every student's unique learning journey.
            </p>
          </div>
          <div className={p.grid3} style={{ marginTop: 'var(--space-7)' }}>
            {[
              { title: 'Smart Classrooms', desc: 'Every classroom is equipped with interactive digital boards and high-speed internet, transforming traditional lessons into immersive learning experiences.' },
              { title: 'Well-Equipped Labs', desc: 'State-of-the-art science, computer, and robotics labs allow students to learn by doing, fostering a spirit of inquiry and innovation.' },
              { title: 'Resource-Rich Library', desc: 'A vast collection of books, journals, and digital resources supports independent research and a love of reading.' },
              { title: 'Creative Spaces', desc: 'Dedicated art rooms, music studios, and dance halls provide avenues for artistic expression and creativity.' },
              { title: 'Sports Complex', desc: 'Full-size playgrounds, courts, and indoor sports facilities ensure every student stays active and healthy.' },
              { title: 'Safe & Secure', desc: '24/7 security, CCTV surveillance, and a well-equipped medical room ensure a safe environment for all students.' },
            ].map((f) => (
              <div key={f.title} className={p.featureCard}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
