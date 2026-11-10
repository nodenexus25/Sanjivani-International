import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ComputerLab() {
  return (
    <>
      <PageHero title="Computer Lab" subtitle="Empowering students with digital literacy." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Computer lab" loading="lazy" />
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
    </>
  );
}
