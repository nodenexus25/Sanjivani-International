import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider.jsx';
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

// Photo + accent colour for each facility tile on the home page
const facilityLooks = {
  'smart-classroom': { image: '/images/smart-classroom/smart-classroom-1.jpg', accent: 'var(--color-accent)' },
  'science-lab': { image: '/images/science-lab/science-lab-2.jpg', accent: 'var(--color-leaf-green)' },
  'computer-lab': { image: '/images/stem-robotics/stem-robotics-1.jpg', accent: 'var(--color-navy-light)', icon: 'robot' },
  library: { image: '/images/library/library-1.jpg', accent: 'var(--color-crimson)' },
  'swimming-pool': { image: '/swimming-pool.jpg', accent: '#1f8fbf' },
  sports: { image: '/sports-turf-night.jpg', accent: 'var(--color-gold-yellow)' },
};

/**
 * Home — all 11 sections in the specified order.
 */
export default function Home() {
  const recentEvents = events.filter((e) => e.type === 'recent').slice(0, 6);
  const recentNews = news.slice(0, 4);
  const recentCirculars = circulars.slice(0, 4);

  const topFacilities = facilities.slice(0, 6);

  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* 2. Facilities */}
      <section className={`section ${styles.facilitiesSection}`}>
        <span className={`${styles.blob} ${styles.blobGold}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobMaroon}`} aria-hidden="true" />
        <div className="container" style={{ position: 'relative' }}>
          <SectionHeading
            eyebrow="Our Campus"
            title="Facilities @ Sanjivani"
            subtitle="World-class infrastructure designed to inspire learning, creativity, and growth."
          />
          <div className={styles.facilityBento}>
            {topFacilities.map((f, i) => {
              const look = facilityLooks[f.id] || {};
              return (
                <Link
                  key={f.id}
                  to={f.link}
                  className={`${styles.fTile} ${styles[`fTile${i + 1}`]}`}
                  style={{ '--tile-accent': look.accent || 'var(--color-accent)' }}
                >
                  <img src={look.image} alt="" loading="lazy" className={styles.fImg} />
                  <span className={styles.fShade} aria-hidden="true" />
                  <span className={styles.fBadge}>
                    <Icon name={look.icon || f.icon} size={22} />
                  </span>
                  <div className={styles.fBody}>
                    <h3 className={styles.fTitle}>{f.title}</h3>
                    <p className={styles.fBlurb}>{f.blurb}</p>
                    <span className={styles.fMore}>
                      Explore <Icon name="arrowRight" size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-7)' }}>
            <Button to="/facilities" variant="primary" iconRight={<Icon name="arrowRight" size={16} />}>View All Facilities</Button>
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
                  {t.image ? (
                    <img src={t.image} alt={t.name} loading="lazy" />
                  ) : (
                    <span className={styles.testInitial} aria-hidden="true">
                      {t.name
                        .split(/\s+/)
                        .filter((w) => /^[A-Za-z]/.test(w))
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  )}
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
