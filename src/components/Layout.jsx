import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UtilityBar from './UtilityBar.jsx';
import Header from './Header.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import Footer from './Footer.jsx';
import FloatingEnquiryTab from './FloatingEnquiryTab.jsx';
import Modal from './Modal.jsx';
import EnquiryForm from './EnquiryForm.jsx';
import Button from './Button.jsx';

const POPUP_KEY = 'sis_enquiry_popup_shown';

/**
 * Layout — wraps every route with UtilityBar, Header, Breadcrumb (inner pages),
 * Footer, FloatingEnquiryTab, and the on-load enquiry popup (once per visitor).
 */
export default function Layout() {
  const { pathname } = useLocation();
  const [popupOpen, setPopupOpen] = useState(false);

  // On-load enquiry popup — shown once per visitor (localStorage)
  useEffect(() => {
    const shown = localStorage.getItem(POPUP_KEY);
    if (!shown) {
      const t = setTimeout(() => {
        setPopupOpen(true);
        localStorage.setItem(POPUP_KEY, '1');
      }, 3500);
      return () => clearTimeout(t);
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <UtilityBar />
      <Header />
      {!isHome && <Breadcrumb />}
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingEnquiryTab />

      {/* On-load enquiry popup */}
      <Modal open={popupOpen} onClose={() => setPopupOpen(false)} title="Admissions Open for 2026-27">
        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
          Book a campus tour or submit an enquiry and our admissions team will reach out within 24 hours.
        </p>
        <EnquiryForm onSubmitted={() => setPopupOpen(false)} />
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Button to="/admission-process" variant="outline" size="sm">Learn about admissions</Button>
        </div>
      </Modal>

      <style>{`
        .skip-link {
          position: absolute;
          left: -999px;
          top: 0;
          background: var(--color-primary);
          color: var(--color-text-light);
          padding: 0.5rem 1rem;
          z-index: 1000;
        }
        .skip-link:focus { left: 0; }
      `}</style>
    </>
  );
}
