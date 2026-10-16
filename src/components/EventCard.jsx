import React from 'react';
import Icon from './Icon.jsx';
import styles from './EventCard.module.css';

/**
 * EventCard — event with image, date, title, location.
 */
export default function EventCard({ event }) {
  const d = new Date(event.date);
  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={event.image} alt={event.title} loading="lazy" />
        <div className={styles.date}>
          <span className={styles.day}>{day}</span>
          <span className={styles.month}>{month}</span>
          <span className={styles.year}>{year}</span>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.desc}>{event.description}</p>
        {event.location && (
          <p className={styles.location}>
            <Icon name="mapPin" size={14} /> {event.location}
          </p>
        )}
      </div>
    </article>
  );
}
