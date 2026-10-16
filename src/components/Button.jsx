import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Button — primary/secondary/outline variants.
 * Supports both <Link> (to) and native <button> (onClick).
 */
export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}
