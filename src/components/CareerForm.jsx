import React from 'react';
import useForm from '../hooks/useForm.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

const initial = {
  name: '', email: '', phone: '', position: '', experience: '', message: '',
};
const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Name is required';
  if (!v.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Invalid email';
  if (!v.phone.trim()) e.phone = 'Phone is required';
  else if (!/^[0-9+\-\s]{7,15}$/.test(v.phone)) e.phone = 'Invalid phone';
  if (!v.position) e.position = 'Please select a position';
  return e;
};

export default function CareerForm() {
  const { values, errors, touched, handleChange, handleBlur, validateAll, resetForm } = useForm(initial, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    // TODO: connect to real endpoint + file upload for resume
    console.log('[CareerForm] payload:', values);
    alert('Application submitted! We will review and contact you. (demo)');
    resetForm();
  };

  const inputStyle = { width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem' };
  const fieldWrap = { display: 'flex', flexDirection: 'column', gap: '0.25rem' };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div style={fieldWrap}>
        <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Full Name *" aria-label="Name" style={inputStyle} />
        {touched.name && errors.name && <Err>{errors.name}</Err>}
      </div>
      <div style={fieldWrap}>
        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email *" aria-label="Email" style={inputStyle} />
        {touched.email && errors.email && <Err>{errors.email}</Err>}
      </div>
      <div style={fieldWrap}>
        <input type="tel" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Phone *" aria-label="Phone" style={inputStyle} />
        {touched.phone && errors.phone && <Err>{errors.phone}</Err>}
      </div>
      <div style={fieldWrap}>
        <select name="position" value={values.position} onChange={handleChange} onBlur={handleBlur} aria-label="Position" style={inputStyle}>
          <option value="">Position applying for *</option>
          <option>Primary Teacher</option>
          <option>Middle School Teacher</option>
          <option>Senior Secondary Teacher</option>
          <option>Sports Coach</option>
          <option>Administrative Staff</option>
          <option>Other</option>
        </select>
        {touched.position && errors.position && <Err>{errors.position}</Err>}
      </div>
      <div style={fieldWrap}>
        <input type="text" name="experience" value={values.experience} onChange={handleChange} placeholder="Years of experience" aria-label="Experience" style={inputStyle} />
      </div>
      <div style={fieldWrap}>
        <input type="file" name="resume" aria-label="Resume upload" style={inputStyle} />
      </div>
      <div style={{ ...fieldWrap, gridColumn: '1 / -1' }}>
        <textarea name="message" value={values.message} rows={4} onChange={handleChange} placeholder="Cover letter / message" aria-label="Message" style={{ ...inputStyle, resize: 'vertical' }} />
      </div>
      <div style={{ gridColumn: '1 / -1' }}>
        <Button type="submit" variant="primary" iconRight={<Icon name="send" size={16} />}>Submit Application</Button>
      </div>
    </form>
  );
}

function Err({ children }) {
  return <span style={{ color: 'var(--color-error)', fontSize: '0.8rem' }}>{children}</span>;
}
