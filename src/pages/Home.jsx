import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider.jsx';
import Card from '../components/Card.jsx';
import StatCounter from '../components/StatCounter.jsx';
import NewsCard from '../components/NewsCard.jsx';
import EventCard from '../components/EventCard.jsx';
import CircularItem from '../components/CircularItem.jsx';
import Carousel from '../components/Carousel.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';

import { heroSlides } from '../data/heroSlides.js';
import { facilities } from '../data/facilities.js';
import { keyFacts } from '../data/keyFacts.js';
import { news } from '../data/news.js';
import { events } from '../data/events.js';
import { circulars } from '../data/circulars.js';
import { testimonials } from '../data/testimonials.js';
import { birthdays, awards } from '../data/siteInfo.js';

import styles from './Home.module.css';

/**
 * Home — all 11 sections in the specified order.
 */
export default function Home() {
  const recentEvents = events.filter((e) => e.type === 'recent').slice(0, 6);
  const recentNews = news.slice(0, 4);
  const recentCirculars = circulars.slice(0, 4);

  // Detect mobile/tablet for facilities carousel layout
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const check = () => setIsCompact(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Pair facilities into groups of 2 for the compact carousel
  const topFacilities = facilities.slice(0, 6);
  const facilityPairs = [];
  for (let i = 0; i < topFacilities.length; i += 2) {
    facilityPairs.push(topFacilities.slice(i, i + 2));
  }

  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* 2. Facilities */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Campus"
            title="Facilities @ Sanjivani"
            subtitle="World-class infrastructure designed to inspire learning, creativity, and growth."
          />
          {isCompact ? (
            <Carousel slidesToShow={1} slidesToScroll={1}>
              {facilityPairs.map((pair, idx) => (
                <div key={idx} className={styles.facilityPair}>
                  {pair.map((f) => (
                    <Card key={f.id} iconName={f.icon} title={f.title} blurb={f.blurb} link={f.link} />
                  ))}
                </div>
              ))}
            </Carousel>
          ) : (
            <div className={styles.facilityGrid}>
              {topFacilities.map((f) => (
                <Card key={f.id} iconName={f.icon} title={f.title} blurb={f.blurb} link={f.link} />
              ))}
            </div>
          )}
          <div className="text-center" style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/facilities" variant="outline" iconRight={<Icon name="arrowRight" size={16} />}>View All Facilities</Button>
          </div>
        </div>
      </section>

      {/* 3. Principal's Message */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.principal}>
            <div className={styles.principalImg}>
              <img
                src="/principal.png"
                alt="Principal of Sanjivani International School"
                loading="lazy"
              />
            </div>
            <div className={styles.principalText}>
              <SectionHeading
                eyebrow="A Message from"
                title="Our Principal"
                center={false}
              />
              <p className={styles.quote}>
                "Welcome to Sanjivani International School, Kharghar! As your Principal, I am thrilled to invite
                you into a community where young minds feel safe, inspired, and challenged. Our school is truly
                a place for every learner because we recognize that no two children are exactly alike."
              </p>
              <p className={styles.signature}>— Principal</p>
              <Button to="/principal-message" variant="outline" iconRight={<Icon name="arrowRight" size={16} />}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Facts */}
      <section className={styles.facts}>
        <div className="container">
          <div className={styles.factsGrid}>
            {keyFacts.map((f) => (
              <StatCounter key={f.id} value={f.value} suffix={f.suffix} label={f.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Latest News */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Stay Informed"
            title="Latest News"
            subtitle="Updates and announcements from across our campus."
          />
          <div className={styles.newsGrid}>
            {recentNews.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/news" variant="primary" iconRight={<Icon name="arrowRight" size={16} />}>View All News</Button>
          </div>
        </div>
      </section>

      {/* 6. Student Birthdays */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Wishes" title="Student Birthdays" subtitle="Wishing our young stars a very happy birthday!" />
          <Carousel
            slidesToShow={4}
            slidesToScroll={2}
            responsive={[
              { breakpoint: 1024, slidesToShow: 3, slidesToScroll: 2 },
              { breakpoint: 768, slidesToShow: 2, slidesToScroll: 1 },
              { breakpoint: 480, slidesToShow: 1, slidesToScroll: 1 },
            ]}
          >
            {birthdays.map((b) => (
              <div key={b.id} className={styles.bdayCard}>
                <div className={styles.bdayIcon}>
                  <Icon name="cake" size={28} />
                </div>
                <h4 className={styles.bdayName}>{b.name}</h4>
                <p className={styles.bdayClass}>{b.class}</p>
                <p className={styles.bdayDate}>DOB: {b.dob}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 7. Circulars */}
      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <SectionHeading eyebrow="Updates" title="Circulars" center={false} />
              <div className={styles.circularList}>
                {recentCirculars.map((c) => (
                  <CircularItem key={c.id} circular={c} />
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Button to="/circulars" variant="outline" iconRight={<Icon name="arrowRight" size={16} />}>All Circulars</Button>
              </div>
            </div>
            <div className={styles.noticeBox}>
              <h3>Important Notice</h3>
              <p>Admissions for the academic session 2026-27 are now open. Limited seats available across all grades.</p>
              <Button to="/online-registration" variant="accent" iconRight={<Icon name="arrowRight" size={16} />}>
                Register Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Recent Events */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Highlights" title="Recent Events" subtitle="Glimpses of life at Sanjivani International School." />
          <div className={styles.eventsGrid}>
            {recentEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/recent-events" variant="primary" iconRight={<Icon name="arrowRight" size={16} />}>View All Events</Button>
          </div>
        </div>
      </section>

      {/* 9. Awards & Achievements */}
      <section className={styles.awards}>
        <div className="container">
          <SectionHeading eyebrow="Recognition" title="Awards & Achievements" light />
          <div className={styles.awardStrip}>
            {awards.map((a) => (
              <div key={a.id} className={styles.awardBadge}>
                <Icon name="award" size={36} />
                <span>{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Parent Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Voices" title="What Parents Say" subtitle="Trusted by parents across the community." />
          <Carousel
            slidesToShow={2}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 900, slidesToShow: 1, slidesToScroll: 1 },
            ]}
          >
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testimonial}>
                <Icon name="quote" size={32} className={styles.quoteIcon} />
                <p className={styles.testText}>“{t.quote}”</p>
                <div className={styles.testAuthor}>
                  <img src={t.image} alt={t.name} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 11. Footer is rendered by Layout */}
    </>
  );
}
