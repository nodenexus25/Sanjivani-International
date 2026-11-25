// Gallery photos — Sanjivani International School
// Real school photos from /public/images. Every photo here is unique to the gallery —
// images shown elsewhere on the site are intentionally not repeated.
const img = (folder, n) => `/images/${folder}/${folder}-${n}.jpg`;

export const galleryPhotos = [
  { id: 1, src: img('public-speaking', 1), title: 'Elocution on Stage', category: 'Events' },
  { id: 2, src: img('public-speaking', 5), title: 'Address at the Podium', category: 'Events' },
  { id: 3, src: img('public-speaking', 8), title: 'Little Speaker, Big Confidence', category: 'Events' },
  { id: 4, src: img('public-speaking', 9), title: 'Role Play — The Doctor', category: 'Arts' },
  { id: 5, src: img('public-speaking', 10), title: 'Stage Performance', category: 'Arts' },
  { id: 6, src: img('public-speaking', 12), title: 'Youth Parliament', category: 'Academics' },
  { id: 7, src: img('music-theatre', 13), title: 'Famous Personalities Role Play', category: 'Arts' },
  { id: 8, src: img('science-lab', 2), title: 'Chemistry Practical', category: 'Academics' },
  { id: 9, src: img('science-lab', 4), title: 'Biology Observation', category: 'Academics' },
  { id: 10, src: img('library', 6), title: 'Reading Hour', category: 'Academics' },
  { id: 11, src: img('peer-learning', 5), title: 'Peer Learning Session', category: 'Academics' },
  { id: 12, src: img('art-craft', 8), title: 'Clay Modelling', category: 'Arts' },
  { id: 13, src: img('yoga', 3), title: 'Meditation & Mindfulness', category: 'Sports' },
  { id: 14, src: img('environment', 2), title: 'Plantation Drive', category: 'Community' },
  { id: 15, src: img('excursion', 2), title: 'Nature Park Excursion', category: 'Community' },
];

export const galleryCategories = ['All', 'Academics', 'Sports', 'Arts', 'Events', 'Community'];
