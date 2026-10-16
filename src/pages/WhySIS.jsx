import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function WhySIS() {
  return (
    <>
      <PageHero title="Why SIS?" subtitle="What makes Sanjivani International School truly international." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock}>
            <p>
              We at Sanjivani firmly believe that the key parameters that are the essence of a truly International
              School are: International Mindset, International teaching attitude, and our well-diversified
              curriculum that reflects an open perspective towards all cultures, promoting multicultural education.
            </p>
            <p>
              International Mindset is the foundation of a truly International School. It is the understanding and
              respecting the value of differences in the culture, upbringing and other norms. We provide a platform
              for students to explore and be sensitive to others, to our environment and to the community, while
              retaining pride in one&rsquo;s own identity. It enables the seamless transition of students into the
              global scenario.
            </p>
            <p>
              Our facilitators are well trained, adept in incorporating technology in the classroom and converting
              a normal classroom to a galaxy of unlimited learning experiences.
            </p>
            <p>
              At SIS, we follow ICSE curriculum which is further customized to the individual needs of our
              students. Learning is basically activity based and students are exposed to International platforms
              with the help of connecting classroom of British council. Concepts are made clear and embedded in
              delicate minds with variety of activities involving various learning styles through digitally enabled
              air-conditioned classrooms. There is a balanced weightage to the academics and sports which is
              essential for the overall development of the future global citizens.
            </p>
            <p>
              Sanjivani International School is a prime contender of the varied awards in the field of academics,
              administration, sports, quality, faculty and leadership. We are the Best International School of
              Navi Mumbai as per Brainfeed magazine survey 2017. Also, we are proud awardee of ISA British council
              and NABET certified educational institute. Producing year after year 100% ICSE results has become
              our tradition and we will be living up to it.
            </p>
            <p>
              It is our privilege to provide a conducive environment to prepare young minds into responsible
              citizens. We nurture the potential of students, develop life-long skills beyond academics and groom
              our students for an ever-changing global community.
            </p>
          </div>
        </div>
      </section>

      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Our Highlights" />
          <div className={p.grid3}>
            {[
              { icon: 'globe', title: 'International Mindset', desc: 'Understanding and respecting cultural differences while retaining pride in one\u2019s identity.' },
              { icon: 'graduation', title: 'ICSE Curriculum', desc: 'Customised to individual student needs with activity-based learning.' },
              { icon: 'star', title: 'Award-Winning', desc: 'Best International School of Navi Mumbai, ISA British Council, NABET certified.' },
            ].map((h) => (
              <div key={h.title} className={p.featureCard} style={{ textAlign: 'center' }}>
                <Icon name={h.icon} size={36} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
