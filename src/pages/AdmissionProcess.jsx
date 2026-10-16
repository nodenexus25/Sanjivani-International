import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';
import styles from './AdmissionProcess.module.css';

const steps = [
  { n: 1, title: 'Online Enquiry', desc: 'Submit an enquiry through our online registration form or contact the admissions office.' },
  { n: 2, title: 'Campus Visit', desc: 'Schedule a campus tour to experience our facilities and meet our team.' },
  { n: 3, title: 'Application Submission', desc: 'Complete and submit the admission form along with the required documents.' },
  { n: 4, title: 'Interaction & Assessment', desc: 'A friendly interaction with the student and an age-appropriate assessment.' },
  { n: 5, title: 'Admission Offer', desc: 'Upon successful assessment, an admission offer is communicated to the parents.' },
  { n: 6, title: 'Fee Payment & Confirmation', desc: 'Complete fee payment and confirm admission. Welcome to Sanjivani!' },
];

export default function AdmissionProcess() {
  return (
    <>
      <PageHero title="Admission Process" subtitle="A simple, transparent journey to join our school community." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="How to Apply" subtitle="Our six-step admission process is designed to be smooth and supportive." />
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.num}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Documents Required" />
          <div className={styles.docs}>
            {[
              'Birth certificate (attested copy)',
              'Previous school transfer certificate',
              'Marksheet of last class attended',
              'Passport-size photographs (4 copies)',
              'Aadhaar card copy of student & parents',
              'Address proof',
              'Caste / category certificate (if applicable)',
            ].map((d) => (
              <div key={d} className={styles.docItem}>
                <Icon name="check" size={18} />
                <span>{d}</span>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/online-registration" variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />}>
              Start Online Registration
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
