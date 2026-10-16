import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Robotics() {
  return (
    <>
      <PageHero title="Robotics Lab" subtitle="Where innovation meets imagination." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="STEM Education" title="Robotics Lab" center={false} />
              <p>
                Advances in technology are spreading their wings across every field — healthcare, travel,
                automation, manufacturing, communication. Our Robotics Lab exposes students to the exciting
                world of automation and artificial intelligence through hands-on projects.
              </p>
              <p>
                From building basic robots to programming complex tasks, students learn the fundamentals of
                electronics, coding, and mechanical design in a stimulating environment.
              </p>
              <ul>
                <li>Advanced robotics kits and programmable microcontrollers</li>
                <li>3D printing and rapid prototyping facilities</li>
                <li>Participation in national and international robotics competitions</li>
                <li>Mentorship by industry professionals</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Robotics lab" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
