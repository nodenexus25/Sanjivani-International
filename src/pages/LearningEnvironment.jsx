import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const programs = [
  { icon: 'heart', title: 'Pre-Primary', desc: 'A joyful, play-based start that nurtures social, emotional and cognitive development.' },
  { icon: 'book', title: 'Primary', desc: 'Strong foundations in language, numeracy and inquiry through activity-based learning.' },
  { icon: 'calculator', title: 'Middle School', desc: 'A broad, balanced curriculum that builds critical thinking and independent study skills.' },
  { icon: 'graduation', title: 'Secondary', desc: 'Rigorous ICSE preparation that prepares students for higher education and life beyond school.' },
];

const subjects = [
  'Mathematics',
  'Social Studies (History & Civics; Geography)',
  'Science (Physics, Biology & Chemistry)',
  'Computers',
  'Robotics',
  'Art',
  'Music',
  'Physical Education',
  'Value Education',
  'General Knowledge',
  'Communicative English',
  'Financial Literacy',
  'French (foreign language)',
];

const learningApproach = [
  { icon: 'target', title: 'Experiential Learning', desc: 'Understanding through hands-on experiences.' },
  { icon: 'search', title: 'Inquiry-Based Learning', desc: 'Discovering through questioning and exploration.' },
  { icon: 'globe', title: 'Interdisciplinary Learning', desc: 'Connecting concepts across subjects.' },
  { icon: 'user', title: 'Collaborative Learning', desc: 'Growing through teamwork and peer learning.' },
  { icon: 'heart', title: 'Holistic Learning', desc: 'Nurturing intellectual, emotional, social and creative development.' },
];

const designThinking = ['Empathise', 'Define', 'Ideate', 'Prototype', 'Test', 'Reflect'];

export default function LearningEnvironment() {
  return (
    <>
      <PageHero title="Curriculum & Teaching Process" subtitle="An ICSE education that extends far beyond the classroom." />

      {/* Board & Affiliation */}
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Affiliation" title="Our Curriculum & Board" center={false} />
              <p>
                Sanjivani International School, Kharghar runs pre-primary, primary, middle and secondary programs
                following the I.C.S.E. curriculum.
              </p>
              <p>
                The school is affiliated to the Council for the Indian School Certificate Examinations (CISCE) and
                follows the ICSE and ISC curriculum.
              </p>
              <p>
                As SIS moves towards an increasingly international learning ecosystem, the school is also preparing
                to introduce Cambridge International education through IGCSE and AS &amp; A Level programmes.
              </p>
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Languages" title="Medium of Instruction" center={false} />
              <p>
                The medium of instruction is <strong>English</strong>, with <strong>Hindi</strong> as the secondary
                language and <strong>Marathi</strong> as the regional language.
              </p>
              <p>
                French has been newly introduced as a foreign language, broadening our students&rsquo; global
                outlook and communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Programs & Levels" subtitle="A continuous learning journey from pre-primary through secondary school." />
          <div className={p.grid4}>
            {programs.map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={30} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Subjects Offered" subtitle="A well-rounded curriculum that combines academics, technology, arts and life skills." />
          <div className={p.grid3}>
            {subjects.map((s) => (
              <div key={s} className={p.featureCard} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Icon name="check" size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <span style={{ color: 'var(--color-text-muted)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy */}
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading eyebrow="Our Pedagogy" title="Learning Beyond the Classroom" subtitle="A child-centred approach that encourages students to question, explore, create, collaborate and apply knowledge to real-life situations." />
          <div className={p.contentBlock}>
            <p>
              At Sanjivani International School, Kharghar, learning extends beyond traditional classroom teaching.
              Through activity-based, project-based, experiential and inquiry-driven learning, we nurture critical
              thinking, creativity, communication, collaboration and strong values. Recognising every child&rsquo;s
              unique learning needs, we strive to make learning engaging, inclusive and meaningful.
            </p>
          </div>

          <SectionHeading title="Our Learning Approach" center={false} />
          <div className={p.grid3}>
            {learningApproach.map((f) => (
              <div key={f.title} className={p.featureCard}>
                <Icon name={f.icon} size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className={p.contentBlock} style={{ marginTop: 'var(--space-7)' }}>
            <h3>Learning in Action</h3>
            <p>
              Our classrooms integrate brainstorming, Circle Time, EduBuddy peer learning, flipped classrooms,
              projects, hands-on activities and technology integration to encourage active participation and
              independent thinking.
            </p>

            <h3>Design Thinking: From Ideas to Innovation</h3>
            <p>
              Through a structured design-thinking cycle, students learn to understand challenges, explore
              possibilities, develop solutions and refine their ideas through experimentation and reflection.
            </p>
          </div>
          <div className={p.grid3}>
            {designThinking.map((step, i) => (
              <div key={step} className={p.featureCard} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{step}</span>
              </div>
            ))}
          </div>

          <div className={p.contentBlock} style={{ marginTop: 'var(--space-7)' }}>
            <h3>Nurturing Future-Ready Learners</h3>
            <p>
              By connecting knowledge with practical skills and academic excellence with personal growth, we empower
              students to become confident, compassionate, creative and responsible lifelong learners.
            </p>
            <p>
              At SIS, learning is not merely imparted; it is experienced, explored and transformed into lifelong
              understanding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
