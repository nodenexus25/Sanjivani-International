import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function SchoolSong() {
  return (
    <>
      <PageHero title="School Song" subtitle="The anthem that embodies the spirit of Sanjivani." />
      <section className={p.page}>
        <div className="container">
          <div className={p.contentBlock} style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p>
              In building the spirit of a school and imbibing the school mission and vision, a &lsquo;School
              Song&rsquo; plays a very vital role. Akin to the &lsquo;National Anthem&rsquo; for a country is the
              &lsquo;School Song&rsquo; for a school. Sacrosanct and revered, the &lsquo;School Song&rsquo; is
              always sung proudly, standing at attention. The &lsquo;School Song&rsquo; inspires the children to
              inculcate the best values of life being taught here in the school.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem' }}>Lyrics</h2>
            <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-7)', borderRadius: 'var(--radius-lg)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', lineHeight: 2, color: 'var(--color-text)' }}>
              <p>Hail to our dear Sanjivani School.<br />
              Where we all go, from day to day.<br />
              To study and learn each golden rule.<br />
              To fit us all for life&rsquo;s hard way.</p>

              <p>So keep on working as we should.<br />
              Don&rsquo;t ever fail to seek the good.<br />
              Shun evil and always do the right.<br />
              Love God and man with all your might.</p>

              <p>Respect to elders always show.<br />
              Their wisdom will guide you wherever you go.<br />
              Be loyal, dutiful and true.<br />
              And deeds of kindness always do.</p>

              <p>Make good use of all your time,<br />
              Don&rsquo;t waste it, that will be a crime.<br />
              Problems you must boldly face,<br />
              To gain success in life&rsquo;s great race.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
