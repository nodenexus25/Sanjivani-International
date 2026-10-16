import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';

export default function Primary() {
  return (
    <>
      <PageHero title="Primary School" subtitle="Grades I to V — building strong foundations." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Primary school students" loading="lazy" />
            </div>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Grades I - V" title="Primary Education" center={false} />
              <p>
                The Primary years are a critical phase of intellectual and personal growth. Our curriculum
                is designed to develop a strong foundation in core subjects while fostering curiosity,
                creativity, and independent thinking.
              </p>
              <p>
                Students engage in experiential learning activities, group projects, and hands-on
                experiments that make learning meaningful and enjoyable. Our dedicated teachers provide
                personalized attention to ensure every child progresses at their own pace.
              </p>
              <ul>
                <li>Comprehensive CBSE-aligned curriculum</li>
                <li>Focus on conceptual understanding over rote learning</li>
                <li>Regular assessments and parent feedback</li>
                <li>Co-curricular activities integrated into daily learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
