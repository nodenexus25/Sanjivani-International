import React, { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import styles from './Modal.module.css';

/**
 * Modal — accessible modal with backdrop, Escape/click-outside close,
 * and focus management.
 */
export default function Modal({ open, onClose, title, children, maxWidth = 480 }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Focus first focusable element
    const first = dialogRef.current?.querySelector('input, button, textarea, select');
    first?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        style={{ maxWidth }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className={styles.head}>
            <h3 id="modal-title" className={styles.title}>{title}</h3>
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close dialog"
            >
              <Icon name="close" size={20} />
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
