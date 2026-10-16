import React, { useEffect } from 'react';
import Icon from './Icon.jsx';
import styles from './Lightbox.module.css';

/**
 * Lightbox — fullscreen image viewer with prev/next and keyboard nav.
 */
export default function Lightbox({ photos, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        <Icon name="close" size={28} />
      </button>
      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <Icon name="chevronLeft" size={32} />
      </button>
      <figure className={styles.content} onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.title} />
        {(photo.title || photo.category) && (
          <figcaption className={styles.caption}>
            <span>{photo.title}</span>
            {photo.category && <em>{photo.category}</em>}
          </figcaption>
        )}
      </figure>
      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <Icon name="chevronRight" size={32} />
      </button>
      <div className={styles.counter}>{index + 1} / {photos.length}</div>
    </div>
  );
}
