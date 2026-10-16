import React, { useState, useMemo } from 'react';
import Lightbox from './Lightbox.jsx';
import Icon from './Icon.jsx';
import styles from './GalleryGrid.module.css';

/**
 * GalleryGrid — filterable photo grid with click-to-open lightbox.
 */
export default function GalleryGrid({ photos, categories }) {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? photos : photos.filter((p) => p.category === filter)),
    [photos, filter]
  );

  const openAt = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      {/* Filters */}
      <div className={styles.filters} role="tablist" aria-label="Filter gallery">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            className={styles.tile}
            onClick={() => openAt(i)}
            aria-label={`Open photo: ${photo.title}`}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <div className={styles.overlay}>
              <Icon name="search" size={28} />
              <span className={styles.caption}>{photo.title}</span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No photos in this category.</p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  );
}
