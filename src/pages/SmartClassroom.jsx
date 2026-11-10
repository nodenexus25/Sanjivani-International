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
                Our classrooms are equipped with smart boards to facilitate smoother and more effective
                teaching–learning. Modern methods of teaching–learning are adopted at Sanjivani International
                School, Kharghar to embrace contemporary teaching methods.
              </p>
              <ul>
                <li>Smart boards in every classroom</li>
                <li>Modern, contemporary teaching–learning methods</li>
                <li>Audio-visual aids that make complex concepts simple</li>
                <li>Air-conditioned, digitally enabled learning spaces</li>
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
