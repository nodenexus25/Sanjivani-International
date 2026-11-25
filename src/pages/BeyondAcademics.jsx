import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const activityAreas = [
  { icon: 'palette', title: 'Arts', desc: 'Painting, craft and visual expression that spark imagination.' },
  { icon: 'music', title: 'Music', desc: 'Vocal and instrumental training across Indian and Western styles.' },
  { icon: 'star', title: 'Theatre', desc: 'Stage performances, role-play and confident self-expression.' },
  { icon: 'robot', title: 'STEM', desc: 'Robotics, coding and hands-on innovation projects.' },
  { icon: 'book', title: 'Languages', desc: 'Literary activities that strengthen communication and creativity.' },
  { icon: 'send', title: 'Communication', desc: 'Debates, elocutions and public speaking to build confidence.' },
  { icon: 'user', title: 'Leadership', desc: 'Student council and clubs that nurture responsibility and teamwork.' },
  { icon: 'leaf', title: 'Environmental Learning', desc: 'Eco initiatives that build awareness and care for our planet.' },
];

const houses = [
  { name: 'Raigad', desc: 'Named after the mighty fort of Chhatrapati Shivaji Maharaj.' },
  { name: 'Pratapgad', desc: 'Named after the historic fort of the Battle of Pratapgad.' },
  { name: 'Sinhagad', desc: 'Named after the brave "Lion Fort" of Maharashtra.' },
  { name: 'Torna', desc: 'Named after Torna, the first fort captured by Shivaji Maharaj.' },
];

export default function BeyondAcademics() {
  return (
    <>
      <PageHero title="Beyond Academics" subtitle="Where talents are discovered and passions nurtured." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock} style={{ marginBottom: 'var(--space-7)' }}>
            <p>
              At Sanjivani International School, Kharghar, learning extends beyond lessons and classrooms. The
              school offers both ECA (Extracurricular Activities) and CCA (Co-curricular Activities). Our diverse
              ECA programmes and clubs give students the freedom to explore their interests across arts, music,
              theatre, STEM, languages, communication, leadership and environmental learning.
            </p>
            <p>
              From the primary years to secondary school, these experiences nurture creativity, confidence,
              curiosity and character — empowering every child to discover their strengths and pursue their
              passions.
            </p>
          </div>
          <SectionHeading
            title="Co-Curricular & Activities"
            subtitle="A rich array of activities that helps students discover and develop their passions."
          />
          <div className={p.grid4}>
            {activityAreas.map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={30} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading
            title="Our Houses"
            subtitle="Four houses, named after the historic forts of Maharashtra, foster healthy competition and house spirit."
          />
          <div className={p.grid4}>
            {houses.map((h) => (
              <div key={h.name} className={p.featureCard}>
                <h3>{h.name}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Glimpses Beyond the Classroom" subtitle="Performances, leadership, eco-initiatives and outreach." />
          <PhotoStrip
            photos={[
              { src: '/images/public-speaking/public-speaking-4.jpg', title: 'Public speaking' },
              { src: '/images/public-speaking/public-speaking-3.jpg', title: 'Elocution' },
              { src: '/images/public-speaking/public-speaking-6.jpg', title: 'Stage confidence' },
              { src: '/images/public-speaking/public-speaking-7.jpg', title: 'Hindi poem recitation' },
              { src: '/images/music-theatre/music-theatre-6.jpg', title: 'Theatre — Friendship play' },
              { src: '/images/music-theatre/music-theatre-11.jpg', title: 'Inter-house role play' },
              { src: '/images/leadership/leadership-2.jpg', title: 'Student council elections' },
              { src: '/images/environment/environment-1.jpg', title: 'Plant the future' },
              { src: '/images/environment/environment-4.jpg', title: 'Seed-ball throwing' },
              { src: '/images/environment/environment-5.jpg', title: 'Seed-ball making' },
              { src: '/images/community-service/community-service-1.jpg', title: 'Community service drive' },
              { src: '/images/excursion/excursion-1.jpg', title: 'Excursion — boating' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
