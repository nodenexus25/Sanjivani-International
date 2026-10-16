import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import { blogPosts } from '../data/blog.js';

export default function Blog() {
  return (
    <>
      <PageHero title="Blog" subtitle="Insights, stories, and thoughts from our school community." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Latest Articles" subtitle="Stories and perspectives from our educators and students." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-5)' }}>
            {blogPosts.map((post) => {
              const d = new Date(post.date);
              return (
                <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article style={{ background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '100%', transition: 'all var(--transition-base)' }}
                           onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                           onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                      <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'var(--space-4)' }}>
                      <div style={{ display: 'flex', gap: 'var(--space-3)', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><Icon name="calendar" size={12} /> {d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>{post.category}</span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-2)', lineHeight: '1.4' }}>{post.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: 'var(--space-3)' }}>{post.excerpt}</p>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        Read More <Icon name="arrowRight" size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
