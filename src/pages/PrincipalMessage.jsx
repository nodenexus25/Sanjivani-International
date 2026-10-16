import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function PrincipalMessage() {
  return (
    <>
      <PageHero title="Principal's Message" subtitle="A note from the Principal's office." />
      <section className={p.page}>
        <div className="container">
          <div className={p.messageCard}>
            <img
              src="/principal.png"
              alt="Principal of Sanjivani International School"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Welcome to Sanjivani International School, Kharghar!</h2>
              <p>
                As your Principal, I am thrilled to invite you into a community where young minds feel safe,
                inspired, and challenged. Our school is truly a place for every learner because we recognize that
                no two children are exactly alike. Instead of a one-size-fits-all approach, our educators adapt to
                diverse learning styles, ensuring that whether a child excels in analytical thinking, creative arts,
                or physical pursuits, they feel valued and empowered to succeed.
              </p>
              <p>
                We take great pride in our purpose-built, practical facilities. Our campus features well-ventilated,
                tech-equipped classrooms, updated science and computer labs, and dedicated arts studios. Beyond
                academics, our excellent sports grounds provide the active spaces needed to keep students moving and
                competing daily. We intentionally focus on providing high-quality, highly functional spaces that
                prioritize genuine educational growth over mere prestige.
              </p>
              <p>
                Ultimately, we deliver a complete educational package by seamlessly blending academics, sports, and
                co-curricular clubs. While our rigorous scholastic programs challenge students intellectually, our
                athletic programs and student activities build essential life skills like resilience, teamwork, and
                leadership. I look forward to partnering with you all to help our students graduate as confident,
                well-rounded global citizens.
              </p>
              <div className={p.signature}>
                Principal
                <small>Sanjivani International School, Kharghar</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
