import React from 'react';
import useForm from '../hooks/useForm.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

const initial = { name: '', email: '', subject: '', message: '' };
const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Name is required';
  if (!v.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Invalid email';
  if (!v.subject.trim()) e.subject = 'Subject is required';
  if (!v.message.trim()) e.message = 'Message is required';
  return e;
};

export default function ContactForm() {
  const { values, errors, touched, handleChange, handleBlur, validateAll, resetForm } = useForm(initial, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    // TODO: connect to real endpoint
    console.log('[ContactForm] payload:', values);
    alert('Message sent! We will get back to you soon. (demo)');
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <input
          type="text" name="name" value={values.name}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Your Name *" aria-label="Name" aria-invalid={!!errors.name}
          style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem' }}
        />
        {touched.name && errors.name && <Err>{errors.name}</Err>}
      </div>
      <div>
        <input
          type="email" name="email" value={values.email}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Email Address *" aria-label="Email" aria-invalid={!!errors.email}
          style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem' }}
        />
        {touched.email && errors.email && <Err>{errors.email}</Err>}
      </div>
      <div>
        <input
          type="text" name="subject" value={values.subject}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Subject *" aria-label="Subject" aria-invalid={!!errors.subject}
          style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem' }}
        />
        {touched.subject && errors.subject && <Err>{errors.subject}</Err>}
      </div>
      <div>
        <textarea
          name="message" value={values.message} rows={5}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Your Message *" aria-label="Message" aria-invalid={!!errors.message}
          style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', resize: 'vertical' }}
        />
        {touched.message && errors.message && <Err>{errors.message}</Err>}
      </div>
      <Button type="submit" variant="primary" iconRight={<Icon name="send" size={16} />}>Send Message</Button>
    </form>
  );
}

function Err({ children }) {
  return <div style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>{children}</div>;
}
