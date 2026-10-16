import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function ChairpersonMessage() {
  return (
    <>
      <PageHero title="Chairman's Message" subtitle="The vision that gave birth to Sanjivani International School." />
      <section className={p.page}>
        <div className="container">
          <div className={p.messageCard}>
            <img
              src="/chairman.png"
              alt="Founder Chairman Late Shri Shankarrao Genuji Kolhe"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Chairman&rsquo;s Vision</h2>
              <p>
                India can reach its potential only when its youth is empowered enough. Intellectuals by race,
                Indians are streets ahead when it comes to brains. This is the land of ancient vedic wisdom. I
                think, India has enough intellectual capacity to come up with many more geniuses — Ramanujams,
                Tagores, Vivekanandas and Krishnamurthys.
              </p>
              <p>
                What we need to do is to empower the intellect here and to revamp the current education system and
                bring in new ways of learning and adopt the new global mechanism and approach. We need to equip
                today&rsquo;s generation with enough armory to be tomorrow&rsquo;s powerful global citizens and
                that&rsquo;s exactly what the Sanjivani Trust has been set up for.
              </p>
              <p>
                That is precisely the perspective and purpose of Sanjivani International School&rsquo;s birth and
                existence. With firm foundation and proper grooming, the children here will not just grow in age
                but in multi-disciplinary global thinking. They will function differently and operate on an evolved
                level. They will be ready for the new India. After all, as Indians, they will need to lead the way,
                globally.
              </p>
              <p style={{ fontStyle: 'italic', fontWeight: 600 }}>Come, let&rsquo;s create a new India!</p>
              <div className={p.signature}>
                Late Shri Shankarrao Genuji Kolhe
                <small>Founder Chairman, Sanjivani Rural Education Society</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
