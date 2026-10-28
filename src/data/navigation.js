// Navigation structure for MegaMenu & MobileDrawer
// Grouped by nav section. `to` = direct link, `items` = sub-links.
// Items with `to` (no items) render as direct links.

export const navGroups = [
  { label: 'HOME', to: '/' },
  {
    label: 'ABOUT SIS',
    items: [
      { to: '/about', label: 'About Us' },
      { to: '/mission-vision', label: 'Vision & Mission' },
      { to: '/founder-message', label: "Founder's Message" },
      { to: '/chairperson-message', label: "Chairman's Message" },
      { to: '/executive-trustee', label: "Executive Trustee's Message" },
      { to: '/managing-trustee', label: "Managing Trustee's Message" },
      { to: '/principal-message', label: "Principal's Message" },
      { to: '/school-song', label: 'School Song' },
    ],
  },
  {
    label: 'ACADEMICS',
    items: [
      { to: '/learning-environment', label: 'Curriculum & Teaching Process' },
      { to: '/examination', label: 'Examination Pattern' },
      { to: '/computer-science', label: 'Computer Science' },
      { to: '/counselling', label: 'Counselling' },
      { to: '/faculty', label: 'Teaching Staff' },
      { to: '/circulars', label: 'Notice & Circulars' },
    ],
  },
  {
    label: 'ADMISSIONS',
    items: [
      { to: '/why-sis', label: 'Why SIS?' },
      { to: '/admission-process', label: 'Admission Process' },
      { to: '/online-registration', label: 'Online Registration' },
      { to: '/fee-structure', label: 'Fee Structure' },
      { to: '/admission-form', label: 'Admission Form' },
    ],
  },
  {
    label: 'LIFE @ SIS',
    items: [
      { to: '/pre-primary', label: 'Pre-Primary School' },
      { to: '/primary', label: 'Primary & Secondary School' },
      { to: '/middle-school', label: 'Middle School' },
      { to: '/beyond-academics', label: 'Beyond Academics' },
      { to: '/sports', label: 'Sports' },
      { to: '/recent-events', label: 'Celebrations & Events' },
      { to: '/alumni', label: 'Alumni' },
    ],
  },
  {
    label: 'ACHIEVEMENTS',
    items: [
      { to: '/awards', label: 'Awards & Recognition' },
      { to: '/results', label: 'ICSE Toppers & Results' },
      { to: '/medhavi-awards', label: 'Medhavi Awards' },
    ],
  },
  {
    label: 'NEWS & EVENTS',
    items: [
      { to: '/recent-events', label: 'Recent Events' },
      { to: '/upcoming-events', label: 'Upcoming Events' },
      { to: '/news', label: 'News' },
      { to: '/circulars', label: 'Circulars' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  {
    label: 'CAMPUS',
    items: [
      { to: '/facilities', label: 'Facilities' },
      { to: '/smart-classroom', label: 'Digital & AC Classrooms' },
      { to: '/science-lab', label: 'Science Laboratories' },
      { to: '/computer-lab', label: 'Computer Lab' },
      { to: '/library', label: 'Library' },
      { to: '/swimming-pool', label: 'Swimming Pool' },
      { to: '/sports', label: 'Sports Grounds' },
      { to: '/art-room', label: 'Art Room' },
      { to: '/music-dance', label: 'Music & Dance' },
      { to: '/robotics-lab', label: 'Robotics Lab' },
      { to: '/skill-lab', label: 'Skill Lab' },
    ],
  },
  {
    label: 'GALLERY',
    items: [
      { to: '/photo-gallery', label: 'Photo Gallery' },
      { to: '/video-gallery', label: 'Video Gallery' },
      { to: '/virtual-tour', label: 'Virtual Tour' },
    ],
  },
  {
    label: 'RESOURCES',
    items: [
      { to: '/downloads', label: 'Downloads' },
      { to: '/circulars', label: 'Notice & Circulars' },
      { to: '/newsletter', label: 'Publications' },
      { to: '/disclosure', label: 'Rules & Regulations' },
    ],
  },
  { label: 'CAREERS', to: '/career' },
  { label: 'CONTACT US', to: '/contact' },
];
