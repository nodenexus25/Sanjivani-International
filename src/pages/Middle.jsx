import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Middle() {
  return (
    <>
      <PageHero title="Middle School" subtitle="Grades VI to VIII — exploring passions and potential." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Grades VI - VIII" title="Middle School" center={false} />
              <p>
                The Middle School years are a time of transition, discovery, and growth. Our program empowers
                students to take ownership of their learning while providing the guidance and support they
                need during this formative stage.
              </p>
              <p>
                With a broad and balanced curriculum, students explore a range of subjects and co-curricular
                activities that help them discover their interests and talents. We emphasize critical
                thinking, collaboration, and communication skills.
              </p>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80" alt="Middle school students" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Middle School Highlights" />
          <div className={p.grid3}>
            {[
              { icon: 'book', title: 'Comprehensive Curriculum', desc: 'Mathematics, Sciences, Social Sciences, Languages, and more.' },
              { icon: 'robot', title: 'STEM Integration', desc: 'Robotics, coding, and hands-on science laboratories.' },
              { icon: 'globe', title: 'Global Perspectives', desc: 'Model UN, exchange programs, and international collaborations.' },
              { icon: 'trophy', title: 'Sports & Fitness', desc: 'Inter-house competitions and specialized coaching.' },
              { icon: 'music', title: 'Arts & Culture', desc: 'Music, dance, drama, and visual arts programs.' },
              { icon: 'user', title: 'Counseling & Wellbeing', desc: 'Dedicated counselors supporting social-emotional growth.' },
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
