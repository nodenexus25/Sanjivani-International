import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

const toppers = [
  { name: 'Ishaq Rumane', score: '98.80%', batch: '2021-22' },
  { name: 'Sara Patil', score: '98.00%', batch: '2021-22' },
  { name: 'Drishti Kumar', score: '97.60%', batch: '2021-22' },
  { name: 'Simeon Sonar', score: '96.60%', batch: '2020-21' },
  { name: 'Ananya Das', score: '96.20%', batch: '2020-21' },
  { name: 'Adarsh Singh', score: '95.80%', batch: '2021-22' },
  { name: 'Laxmi Ram Guru', score: '95.80%', batch: '2020-21' },
  { name: 'Shivank Malhotra', score: '95.60%', batch: '2020-21' },
  { name: 'Rahul Nambiar', score: '95.40%', batch: '2020-21' },
  { name: 'Simar Chandekar', score: '95.40%', batch: '2021-22' },
];

export default function Results() {
  return (
    <>
      <PageHero title="ICSE Toppers & Results" subtitle="A legacy of 100% ICSE results year after year." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Our ICSE Toppers" subtitle="Celebrating the academic excellence of our students." />
          <div className={p.contentBlock} style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: '#fff' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Student</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>ICSE Score</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {toppers.map((t, i) => (
                    <tr key={t.name} style={{ background: i % 2 === 0 ? '#fff' : 'var(--color-bg-alt)' }}>
                      <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>{t.name}</td>
                      <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: 600, color: 'var(--color-primary)' }}>{t.score}</td>
                      <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)' }}>{t.batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Legacy of Academic Excellence" subtitle="Words from our toppers." />
          <div className={p.grid2}>
            <div className={p.featureCard}>
              <p style={{ fontStyle: 'italic' }}>&ldquo;Sanjivani International School has the best infrastructure and dedicated faculty that aims for the holistic development of the student.&rdquo;</p>
              <p style={{ marginTop: '1rem', fontWeight: 600 }}>— Ishaq Rumane, 98.80% (2021-22)</p>
            </div>
            <div className={p.featureCard}>
              <p style={{ fontStyle: 'italic' }}>&ldquo;The dedicated staff leaves no stone unturned in its quest for perfection in their students.&rdquo;</p>
              <p style={{ marginTop: '1rem', fontWeight: 600 }}>— Sara Patil, 98.00% (2021-22)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
