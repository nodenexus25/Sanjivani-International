import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import { blogPosts } from '../data/blog.js';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <PageHero title="Post Not Found" />
        <section className="section">
          <div className="container text-center">
            <p>The article you are looking for does not exist.</p>
            <Button to="/blog" variant="primary">Back to Blog</Button>
          </div>
        </section>
      </>
    );
  }

  const d = new Date(post.date);
  return (
    <>
      <PageHero title={post.title} />
      <article className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Icon name="calendar" size={14} /> {d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Icon name="user" size={14} /> {post.author}</span>
            <span style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>{post.category}</span>
          </div>
          <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-6)', boxShadow: 'var(--shadow-md)' }} />
          <div style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--color-text)' }}>
            {post.content.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: 'var(--space-4)' }}>{para}</p>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--color-border)' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              <Icon name="chevronLeft" size={16} /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
