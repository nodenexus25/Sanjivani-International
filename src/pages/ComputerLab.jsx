import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ComputerLab() {
  return (
    <>
      <PageHero title="Computer Lab" subtitle="Empowering students with digital literacy." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Computer lab" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Technology" title="Computer Labs" center={false} />
              <p>
                Information technology has become integral to every walk of life. With our fully equipped
                computer lab, we expose students easily to computer education from an early age.
              </p>
              <ul>
                <li>60+ high-speed workstations with latest software</li>
                <li>Dedicated internet connectivity and Wi-Fi</li>
                <li>Curriculum covering coding, design, and productivity tools</li>
                <li>Cyber safety and digital citizenship education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
