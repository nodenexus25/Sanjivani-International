import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
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
              <img src="/images/smart-classroom/smart-classroom-1.jpg" alt="Students using the interactive smart board" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Smart Learning in Action" subtitle="Interactive boards make every lesson engaging." />
          <PhotoStrip
            photos={[
              { src: '/images/classroom/classroom-2.jpg', title: 'Interactive lesson' },
              { src: '/images/peer-learning/peer-learning-4.jpg', title: 'Presentation on the smart board' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
