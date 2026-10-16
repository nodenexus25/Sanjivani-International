import React from 'react';
import PageHero from '../components/PageHero.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';

const videos = [
  { id: 1, title: 'Annual Day 2025 Highlights', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Campus Tour', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Science Exhibition 2025', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Sports Day Highlights', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Robotics Workshop', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Cultural Fest', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80' },
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
