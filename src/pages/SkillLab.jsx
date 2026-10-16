import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function SkillLab() {
  return (
    <>
      <PageHero title="Skill Lab" subtitle="Hands-on learning for the innovators of tomorrow." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Innovation Hub" title="Our Skill Lab" center={false} />
              <p>
                The Skill Lab is a dedicated space where students explore, experiment, and create. Equipped
                with the latest tools in robotics, 3D printing, electronics, and digital fabrication, it
                serves as a launchpad for young innovators.
              </p>
              <p>
                Students work on real-world projects, participate in competitions, and develop the
                problem-solving and critical-thinking skills essential for the 21st century.
              </p>
              <ul>
                <li>Robotics kits & programmable microcontrollers</li>
                <li>3D printers and design software</li>
                <li>Electronics and IoT workstations</li>
                <li>Mentorship by industry professionals</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Skill lab" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
