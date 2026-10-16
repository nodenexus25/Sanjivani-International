import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function BeyondAcademics() {
  return (
    <>
      <PageHero title="Beyond Academics" subtitle="Where talents are discovered and passions nurtured." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading
            title="Co-Curricular & Activities"
            subtitle="We believe education extends far beyond textbooks. Our rich array of activities helps students discover their passions."
          />
          <div className={p.grid3}>
            {[
              { icon: 'music', title: 'Music & Dance', desc: 'Vocal, instrumental, classical, and contemporary dance forms.' },
              { icon: 'palette', title: 'Art & Craft', desc: 'Painting, sculpture, pottery, and creative expression.' },
              { icon: 'trophy', title: 'Sports', desc: 'Cricket, football, basketball, athletics, swimming, and more.' },
              { icon: 'robot', title: 'Robotics & Coding', desc: 'Hands-on STEM learning with modern kits and tools.' },
              { icon: 'book', title: 'Literary Clubs', desc: 'Debates, quizzes, creative writing, and public speaking.' },
              { icon: 'globe', title: 'Model UN', desc: 'Global awareness, diplomacy, and leadership development.' },
              { icon: 'leaf', title: 'Eco Club', desc: 'Environmental awareness and sustainability initiatives.' },
              { icon: 'heart', title: 'Community Service', desc: 'Social outreach and value-driven volunteer programs.' },
              { icon: 'star', title: 'Drama & Theatre', desc: 'Stage performances, role-play, and creative expression.' },
            ].map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={30} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
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
