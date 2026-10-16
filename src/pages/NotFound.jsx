import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.text}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Button to="/" variant="primary" iconRight={<Icon name="arrowRight" size={16} />}>Back to Home</Button>
          <Link to="/contact" className={styles.link}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
