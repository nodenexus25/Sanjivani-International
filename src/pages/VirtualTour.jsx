import React from 'react';
import PageHero from '../components/PageHero.jsx';
import styles from './VirtualTour.module.css';

export default function VirtualTour() {
  return (
    <>
      <PageHero title="Virtual Tour" subtitle="Explore our campus from anywhere in the world." />
      <section className={styles.tour}>
        <div className="container">
          <div className={styles.iframeWrap}>
            <iframe
              className={styles.frame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.32!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzAwLjAiTiA3N8KwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
              title="Sanjivani International School Virtual Tour"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className={styles.note}>
            This is a placeholder virtual tour. Replace the iframe <code>src</code> with your own
            360° virtual tour embed URL.
          </p>
        </div>
      </section>
    </>
  );
}
