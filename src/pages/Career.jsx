import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CareerForm from '../components/CareerForm.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const jobs = [
  { id: 1, title: 'Primary School Teacher', department: 'Academics', location: 'On Campus', type: 'Full-time' },
  { id: 2, title: 'Mathematics Teacher (Grades IX-XII)', department: 'Academics', location: 'On Campus', type: 'Full-time' },
  { id: 3, title: 'Sports Coach (Cricket / Football)', department: 'Physical Education', location: 'On Campus', type: 'Full-time' },
  { id: 4, title: 'Robotics & Coding Instructor', department: 'STEM', location: 'On Campus', type: 'Part-time' },
  { id: 5, title: 'Music Teacher', department: 'Performing Arts', location: 'On Campus', type: 'Full-time' },
  { id: 6, title: 'Administrative Officer', department: 'Administration', location: 'On Campus', type: 'Full-time' },
];

export default function Career() {
  return (
    <>
      <PageHero title="Careers" subtitle="Join our passionate team of educators." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Current Openings" subtitle="We are always looking for passionate individuals to join our team." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
            {jobs.map((j) => (
              <div key={j.id} className={p.featureCard} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{j.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                    <span style={{ fontSize: '0.75rem', background: 'var(--color-bg-alt)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', color: 'var(--color-text-muted)' }}>{j.department}</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--color-accent)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-pill)', color: 'var(--color-primary-dark)', fontWeight: 600 }}>{j.type}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Icon name="mapPin" size={13} /> {j.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading title="Apply Now" subtitle="Don't see a fitting role? Send us your resume and we'll reach out when an opportunity arises." />
          <div style={{ background: '#fff', padding: 'var(--space-7)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)' }}>
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
}
