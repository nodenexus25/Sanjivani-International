import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function Examination() {
  return (
    <>
      <PageHero title="Examination Pattern" subtitle="Continuous evaluation for holistic growth." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Scheme of Examinations & Continuous Evaluation" />
          <div className={p.contentBlock}>
            <p>
              The school follows regular and continuous evaluation based on the student&rsquo;s performance
              throughout the year. Appearance in all evaluations is compulsory. Retest will not be administered.
              90% attendance is compulsory for students to be eligible to take the final examinations.
            </p>

            <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>Examination Pattern</h3>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: '#fff' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>#</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Applies to</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>1</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>Weekly Test</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>On every Monday / Friday.</td>
                  </tr>
                  <tr style={{ background: 'var(--color-bg-alt)' }}>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>2</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>Classes I to IX</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>25 Marks. Term End Examinations (80 Marks) will be conducted twice in a year.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>3</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>Classes I to VIII — Evaluation & Weightage</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>Weekly Test (20%) + First Term Examination (20%) + Annual Examination (60%) = 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>Character Building</h3>
            <p>
              Character building and moral instructions are an important part of the daily discipline of the
              school. While the school does not ignore the academic and physical education side of the pupil, the
              school believes in &ldquo;Manners make the man!&rdquo; The school therefore, makes an earnest
              endeavour to see that the children grow in the wisdom of the heart and it is in the formative years
              of life that great care must be taken to fill the mind of the child with ennobling thoughts. The
              assembly time which aims at the building up of character of the children is therefore very
              important.
            </p>

            <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>Weightage for Co-Scholastic Aspects</h3>
            <p>
              Weightage will be given to the following aspects. Marks scored by the pupil will be added to the
              marks scored in other academic subjects of the Terminal Examinations and the overall percentage
              determined accordingly:
            </p>
            <ul>
              <li>Daily discipline and conduct of the pupil in the school</li>
              <li>Regularity and punctuality</li>
              <li>Uniform and neatness</li>
              <li>Notebooks and textbooks (submission on time, getting textbooks to school)</li>
              <li>Getting the almanac signed by the parents</li>
            </ul>

            <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>Use of Unfair Means</h3>
            <p>The following practice shall be considered as using unfair means:</p>
            <ul>
              <li>During examination having in possession papers, chits, books, notes or any other material or information relevant to the paper concerned.</li>
              <li>Giving or receiving assistance directly or indirectly of any kind or attempting to do so.</li>
            </ul>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>She / he will be given zero in the concerned subject.</li>
              <li>Such students will not be eligible for any academic award or school appointments.</li>
              <li>Repetition of such practices will result in dismissal from school.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
