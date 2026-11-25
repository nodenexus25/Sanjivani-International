import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const sports = [
  { icon: 'target', title: 'Archery' },
  { icon: 'trophy', title: 'Athletics' },
  { icon: 'ball', title: 'Football' },
  { icon: 'ball', title: 'Basketball' },
  { icon: 'ball', title: 'Cricket' },
  { icon: 'target', title: 'Chess' },
  { icon: 'star', title: 'Taekwondo' },
  { icon: 'heart', title: 'Yoga' },
  { icon: 'ball', title: 'Handball' },
  { icon: 'graduation', title: 'Rock Climbing' },
];

export default function Sports() {
  return (
    <>
      <PageHero title="Sports" subtitle="A sound mind in a sound body." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Physical Education" title="Sports & Athletics" center={false} />
              <p>
                Our sports facilities and play areas include an exclusive outdoor turf area with a basketball
                court and an indoor games room for chess, carrom, yoga and gymnastics. Through structured physical
                activities and games, students embrace fitness, teamwork, discipline and sportsmanship.
              </p>
              <p>
                The school&rsquo;s established sporting culture already includes football, basketball, handball,
                chess, cricket, archery, taekwondo and yoga, with students having participated at district and
                state levels.
              </p>
              <ul>
                <li>Outdoor turf area with a basketball court</li>
                <li>Indoor games room for chess, carrom, yoga and gymnastics</li>
                <li>Structured coaching that builds coordination and resilience</li>
                <li>Inter-house and inter-school competitions</li>
              </ul>
            </div>
            <div className={p.imageBox}>
              <img src="/football-turf-ground.jpg" alt="Sanjivani International School sports grounds" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${p.page} ${p['page--alt']}`}>
        <div className="container">
          <SectionHeading title="Sports We Offer" subtitle="Age-appropriate sporting and fitness activities for every learner." />
          <div className={p.grid4}>
            {sports.map((s) => (
              <div key={s.title} className={p.featureCard} style={{ textAlign: 'center' }}>
                <Icon name={s.icon} size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
                <h3>{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Sports in Action" subtitle="Football, taekwondo, gymnastics and yoga on our campus." />
          <PhotoStrip
            photos={[
              { src: '/images/football/football-1.jpg', title: 'Inter-school football' },
              { src: '/images/martial-arts/martial-arts-1.jpg', title: 'Taekwondo demonstration' },
              { src: '/images/playground-sports/playground-sports-6.jpg', title: 'Gymnastics on the turf' },
              { src: '/images/yoga/yoga-1.jpg', title: 'Mass yoga session' },
              { src: '/images/football/football-2.jpg', title: 'Goalkeeping in action' },
              { src: '/images/martial-arts/martial-arts-2.jpg', title: 'Taekwondo practice' },
              { src: '/images/yoga/yoga-4.jpg', title: 'Yoga asanas' },
              { src: '/images/playground-sports/playground-sports-3.jpg', title: 'Floodlit football turf' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
