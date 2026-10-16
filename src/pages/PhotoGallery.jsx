import React from 'react';
import PageHero from '../components/PageHero.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import { galleryPhotos, galleryCategories } from '../data/gallery.js';

export default function PhotoGallery() {
  return (
    <>
      <PageHero title="Photo Gallery" subtitle="Glimpses of life at Sanjivani International School." />
      <section className="section">
        <div className="container">
          <GalleryGrid photos={galleryPhotos} categories={galleryCategories} />
        </div>
      </section>
    </>
  );
}
