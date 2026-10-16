import React from 'react';
import Icon from './Icon.jsx';
import styles from './VideoEmbed.module.css';

/**
 * VideoEmbed — responsive YouTube/vimeo-style embed with thumbnail overlay.
 * Accepts either an `embedUrl` (iframe src) or `thumbnail` + play button.
 */
export default function VideoEmbed({ title, embedUrl, thumbnail }) {
  const [playing, setPlaying] = React.useState(false);

  if (playing && embedUrl) {
    return (
      <div className={styles.wrap}>
        <iframe
          className={styles.frame}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.wrap}
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      {thumbnail && <img src={thumbnail} alt={title} loading="lazy" className={styles.thumb} />}
      <div className={styles.overlay}>
        <span className={styles.playBtn} aria-hidden="true">
          <Icon name="play" size={28} fill="currentColor" />
        </span>
      </div>
      <span className={styles.title}>{title}</span>
    </button>
  );
}
