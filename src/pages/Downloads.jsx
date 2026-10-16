import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import { downloads } from '../data/downloads.js';

export default function Downloads() {
  return (
    <>
      <PageHero title="Downloads" subtitle="Forms, documents, and resources for parents and students." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Download Center" subtitle="Access all important documents and forms here." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
            {downloads.map((d) => (
              <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', transition: 'all var(--transition-fast)' }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-accent)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="file" size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.15rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.title}</h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{d.type} · {d.size}</span>
                </div>
                <a href={d.file} download aria-label={`Download ${d.title}`} style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-pill)', display: 'inline-flex', flexShrink: 0 }}>
                  <Icon name="download" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
