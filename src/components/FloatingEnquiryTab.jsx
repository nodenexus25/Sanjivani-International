import React, { useState } from 'react';
import Icon from './Icon.jsx';
import EnquiryForm from './EnquiryForm.jsx';
import styles from './FloatingEnquiryTab.module.css';

/**
 * FloatingEnquiryTab — a vertical tab pinned to the right edge that
 * slides open an enquiry panel when clicked.
 */
export default function FloatingEnquiryTab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.tab} ${open ? styles.tabOpen : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="floating-enquiry-panel"
      >
        <Icon name="send" size={16} />
        <span className={styles.label}>Enquire Now</span>
      </button>

      <div
        id="floating-enquiry-panel"
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        role="region"
        aria-label="Enquiry form"
      >
        <div className={styles.panelHead}>
          <h3>Quick Enquiry</h3>
          <button
            type="button"
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Close enquiry panel"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className={styles.panelBody}>
          <EnquiryForm onSubmitted={() => setOpen(false)} compact />
        </div>
      </div>
    </>
  );
}
