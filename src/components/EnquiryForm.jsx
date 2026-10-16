import React from 'react';
import useForm from '../hooks/useForm.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import styles from './EnquiryForm.module.css';

/**
 * EnquiryForm — used by floating tab and on-load popup.
 * Client-side validation; submit logs payload (TODO: connect to endpoint).
 */
const initial = {
  name: '',
  email: '',
  phone: '',
  grade: '',
  message: '',
};

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Name is required';
  if (!v.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Invalid email';
  if (!v.phone.trim()) e.phone = 'Phone is required';
  else if (!/^[0-9+\-\s]{7,15}$/.test(v.phone)) e.phone = 'Invalid phone number';
  if (!v.grade) e.grade = 'Please select a grade';
  return e;
};

export default function EnquiryForm({ compact = false, onSubmitted }) {
  const { values, errors, touched, handleChange, handleBlur, validateAll, resetForm } = useForm(initial, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    // TODO: replace with real API call, e.g. fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(values) })
    console.log('[EnquiryForm] payload:', values);
    alert('Thank you! Your enquiry has been received. (demo)');
    resetForm();
    onSubmitted?.();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Full Name *"
          aria-label="Full name"
          aria-invalid={!!errors.name}
        />
        {touched.name && errors.name && <span className={styles.err}>{errors.name}</span>}
      </div>
      <div className={styles.field}>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address *"
          aria-label="Email"
          aria-invalid={!!errors.email}
        />
        {touched.email && errors.email && <span className={styles.err}>{errors.email}</span>}
      </div>
      <div className={styles.field}>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Phone Number *"
          aria-label="Phone"
          aria-invalid={!!errors.phone}
        />
        {touched.phone && errors.phone && <span className={styles.err}>{errors.phone}</span>}
      </div>
      <div className={styles.field}>
        <select
          name="grade"
          value={values.grade}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Grade applying for"
          aria-invalid={!!errors.grade}
        >
          <option value="">Grade applying for *</option>
          <option>Nursery</option>
          <option>LKG / UKG</option>
          <option>Grade I - V</option>
          <option>Grade VI - VIII</option>
          <option>Grade IX - X</option>
          <option>Grade XI - XII</option>
        </select>
        {touched.grade && errors.grade && <span className={styles.err}>{errors.grade}</span>}
      </div>
      {!compact && (
        <div className={styles.field}>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={3}
            placeholder="Your message (optional)"
            aria-label="Message"
          />
        </div>
      )}
      <Button type="submit" variant="primary" size="md" className={styles.submit} iconRight={<Icon name="arrowRight" size={16} />}>
        Submit Enquiry
      </Button>
    </form>
  );
}
