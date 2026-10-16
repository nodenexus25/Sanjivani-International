import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FeeTable from '../components/FeeTable.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function FeeStructure() {
  return (
    <>
      <PageHero title="Fee Structure" subtitle="Transparent and comprehensive fee details for 2026-27." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading title="Fee Structure 2026-27" subtitle="All fees are in INR. Please contact the admissions office for any clarifications." />
          <FeeTable />
          <div className="text-center" style={{ marginTop: 'var(--space-7)' }}>
            <Button to="/admission-form" variant="outline" iconRight={<Icon name="download" size={16} />}>
              Download Fee Structure PDF
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
