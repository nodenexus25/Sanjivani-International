import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ComputerScience() {
  return (
    <>
      <PageHero title="Computer Science" subtitle="Technology integrated into learning from the early years." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Academics" title="Computer Science" center={false} />
              <p>
                Computer science is included in the curriculum since the kindergarten classes as it is an integral
                part of our lives, shaping virtually everything from the objects around us to the way we
                communicate, travel, work and play. Computer science is a powerful force for making a positive
                difference in the world.
              </p>
              <p>
                Our computer lab is equipped with modern workstations that expose students to the fundamentals of
                computing, productivity tools, coding, and digital literacy. Students learn to use technology
                responsibly and creatively, preparing them for a digitally connected future.
              </p>
            </div>
            <div className={p.imageBox}>
              <img src="/images/computer-lab/computer-lab-7.jpg" alt="Students learning computer science" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
