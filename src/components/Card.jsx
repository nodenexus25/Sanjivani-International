import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import styles from './Card.module.css';

/**
 * Card — generic facility/info card with icon, title, blurb, optional link.
 */
export default function Card({ icon, title, blurb, link, iconName }) {
  const content = (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon name={iconName || icon} size={32} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.blurb}>{blurb}</p>
      {link && (
        <span className={styles.more}>
          Learn More <Icon name="arrowRight" size={14} />
        </span>
      )}
    </div>
  );
  return link ? <Link to={link} className={styles.cardLink}>{content}</Link> : content;
}
