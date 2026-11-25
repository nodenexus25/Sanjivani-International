import React from 'react';
import PageHero from '../components/PageHero.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';

const videos = [
  { id: 1, title: 'Annual Day 2025 Highlights', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/public-speaking/public-speaking-2.jpg' },
  { id: 2, title: 'Campus Tour', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/art-craft/art-craft-5.jpg' },
  { id: 3, title: 'Science Exhibition 2025', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/science-lab/science-lab-6.jpg' },
  { id: 4, title: 'Sports Day Highlights', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/yoga/yoga-2.jpg' },
  { id: 5, title: 'Robotics Workshop', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/computer-lab/computer-lab-6.jpg' },
  { id: 6, title: 'Cultural Fest', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: '/images/music-theatre/music-theatre-12.jpg' },
];

export default function VideoGallery() {
  return (
    <>
      <PageHero title="Video Gallery" subtitle="Watch our students in action." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 'var(--space-5)' }}>
            {videos.map((v) => (
              <VideoEmbed key={v.id} title={v.title} embedUrl={v.embedUrl} thumbnail={v.thumbnail} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
