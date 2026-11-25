import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import p from './page.module.css';

export default function ComputerLab() {
  return (
    <>
      <PageHero title="Computer Lab" subtitle="Empowering students with digital literacy." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="/images/computer-lab/computer-lab-4.jpg" alt="Students working in the computer lab" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Technology" title="Computer &amp; Robotics Lab" center={false} />
              <p>
                Our technology-enabled computer lab and robotics lab encourage digital literacy, computational
                thinking, coding and innovation. These spaces empower students to explore emerging technologies,
                solve problems creatively and develop essential skills for the future.
              </p>
              <ul>
                <li>Modern computer workstations with dedicated connectivity</li>
                <li>Robotics and coding to build computational thinking</li>
                <li>Exploration of emerging technologies and creative problem-solving</li>
                <li>Digital citizenship and responsible technology use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Life in the Computer Lab" subtitle="Every learner gets hands-on time at a dedicated workstation." />
          <PhotoStrip
            photos={[
              { src: '/images/computer-lab/computer-lab-1.jpg', title: 'Coding practice' },
              { src: '/images/computer-lab/computer-lab-2.jpg', title: 'Computer lab' },
              { src: '/images/computer-lab/computer-lab-3.jpg', title: 'Individual workstations' },
              { src: '/images/computer-lab/computer-lab-5.jpg', title: 'Digital literacy session' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
