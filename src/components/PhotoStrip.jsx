import React, { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import Icon from './Icon.jsx';
import styles from './PhotoStrip.module.css';

/**
 * PhotoStrip — responsive grid of real school photos with click-to-open lightbox.
 * photos: [{ src, title }]
 */
export default function PhotoStrip({ photos }) {
  const [index, setIndex] = useState(null);
  const close = () => setIndex(null);
  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.tile}
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${photo.title}`}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <span className={styles.overlay}>
              <Icon name="search" size={22} />
              <span className={styles.caption}>{photo.title}</span>
            </span>
          </button>
        ))}
      </div>
      {index !== null && (
        <Lightbox photos={photos} index={index} onClose={close} onNext={next} onPrev={prev} />
      )}
    </>
  );
}
