import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

const newsletters = [
  { id: 1, title: 'October 2026 Newsletter', date: '2026-10-01', summary: 'Highlights of our Science Exhibition, Sports Day preparations, and upcoming events.' },
  { id: 2, title: 'September 2026 Newsletter', date: '2026-09-01', summary: 'Back to school, new robotics wing inauguration, and parent-teacher meet recap.' },
  { id: 3, title: 'August 2026 Newsletter', date: '2026-08-01', summary: 'Independence Day celebrations, art exhibition, and academic milestones.' },
  { id: 4, title: 'July 2026 Newsletter', date: '2026-07-01', summary: 'Cultural fest highlights, alumni meet, and summer reading program results.' },
];

export default function Newsletter() {
  return (
    <>
      <PageHero title="Newsletter" subtitle="Stay updated with all the latest from our school." />
      <section className="section">
        <div className="container">
          {/* Subscribe */}
          <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: '#fff', padding: 'var(--space-7)', borderRadius: 'var(--radius-xl)', textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ color: '#fff', marginBottom: 'var(--space-3)' }}>Subscribe to Our Newsletter</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--space-5)' }}>Get the latest news, events, and updates delivered to your inbox.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed! (demo)'); }} style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', gap: 0 }}>
              <input type="email" required placeholder="Enter your email" aria-label="Email" style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-pill) 0 0 var(--radius-pill)', border: 'none', fontSize: '0.95rem' }} />
              <Button type="submit" variant="accent" style={{ borderRadius: '0 var(--radius-pill) var(--radius-pill) 0' }}>Subscribe</Button>
            </form>
          </div>

          <SectionHeading title="Past Newsletters" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
            {newsletters.map((n) => (
              <div key={n.id} className={p.featureCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent-dark)', fontSize: '0.8rem', marginBottom: 'var(--space-2)' }}>
                  <Icon name="calendar" size={14} />
                  {new Date(n.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)' }}>{n.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>{n.summary}</p>
                <a href="#" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.88rem' }}>
                  <Icon name="download" size={14} /> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
