import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import { keyFacts } from '../data/keyFacts.js';
import StatCounter from '../components/StatCounter.jsx';
import p from './page.module.css';

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="Sanjivani International School, Kharghar — nurturing minds since 2006." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Welcome to" title="Sanjivani International School" center={false} />
              <p>
                Sanjivani International School was founded in 2006 by Late Veteran National Congress Leader and
                Educationist Hon&rsquo;ble Shri Shankarrao Genuji Kolhe with the motto
                &ldquo;Education for Enrichment, Enhancement and Excellence&rdquo;. Late Shri Shankarrao Genuji
                Kolhe is the Founder Chairman of Sanjivani Rural Education Society, which was established in 1982.
              </p>
              <p>
                Sanjivani School is one of the 10 educational institutions managed under the able and dynamic
                leadership of the society. The society also has under its umbrella a College of Engineering, a
                Polytechnic College, a College of Education, a Sainik School, and many Jr. Colleges.
              </p>
              <p>
                We follow the ICSE curriculum, customised to the individual needs of our students. The medium of
                instruction is English, and we offer classes from Nursery, Jr KG, Sr KG through Class I to Class X.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Button to="/mission-vision" variant="primary" iconRight={<Icon name="arrowRight" size={16} />}>Our Vision & Mission</Button>
                <Button to="/why-sis" variant="outline">Why SIS?</Button>
              </div>
            </div>
            <div className={p.imageBox}>
              <img
                src="/building-exterior.jpg"
                alt="Sanjivani International School campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Origin & History" subtitle="A journey of excellence in education." center={false} />
          <p>
            The exordium of Sanjivani International School, Kharghar, in the year 2006, ushered with it a deep
            propensity to gravitate towards all-round excellence in providing quality education to the residents
            of Navi Mumbai.
          </p>
          <p>
            Sanjivani International School functions under Sanjivani Rural Education Society (SRES), established
            in the year 1982 by former State Minister Late Mr. Shankarraoji Kolhe with the view to impart technical
            education in rural areas. SRES is a registered educational society with eminent and renowned members
            from all walks of life — educationists, administrators, social workers, lawyers, doctors, technocrats,
            and economists.
          </p>
        </div>
      </section>

      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Our Framework" subtitle="Understanding and communicating through activity-based learning." center={false} />
          <p>
            The focus is on understanding and communicating, and this is achieved through project work and group
            activities. The idea is to increase the child&rsquo;s capacities of visualisation and imagination so as
            to encourage him/her to think creatively and constructively, to stimulate the child&rsquo;s quest for
            knowledge, and to inculcate a spirit of curiosity.
          </p>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Why Choose Us" subtitle="A holistic approach to education that prepares students for life." />
          <div className={p.grid4}>
            {[
              { icon: 'graduation', title: 'ICSE Curriculum', desc: 'Customised ICSE curriculum tailored to each student\u2019s individual needs.' },
              { icon: 'user', title: 'Expert Faculty', desc: 'Well-trained facilitators adept in incorporating technology in the classroom.' },
              { icon: 'globe', title: 'International Mindset', desc: 'ISA British Council awardee — connecting classrooms to global platforms.' },
              { icon: 'star', title: '100% Results', desc: 'Producing year after year 100% ICSE results has become our tradition.' },
            ].map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={32} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={p.page}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', background: 'var(--color-primary)', padding: 'var(--space-7)', borderRadius: 'var(--radius-xl)' }}>
            {keyFacts.map((f) => (
              <StatCounter key={f.id} value={f.value} suffix={f.suffix} label={f.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
