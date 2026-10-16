import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function SmartClassroom() {
  return (
    <>
      <PageHero title="Smart Classrooms" subtitle="Technology at the heart of every lesson." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Innovation" title="Smart Classrooms" center={false} />
              <p>
                Meet Technology, the presiding member of the Sanjivani classroom. We have successfully brought
                technology into our classrooms with the introduction of interactive smart boards and digital
                learning resources.
              </p>
              <ul>
                <li>Interactive digital boards in every classroom</li>
                <li>Curriculum-aligned digital content and simulations</li>
                <li>Audio-visual aids that make complex concepts simple</li>
                <li>Seamless integration with our learning management system</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Smart classroom" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
