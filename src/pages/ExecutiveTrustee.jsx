import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function ExecutiveTrustee() {
  return (
    <>
      <PageHero title="Executive Trustee's Message" subtitle="A message from Hon. Shri Bipindada Shankarrao Kolhe." />
      <section className={p.page}>
        <div className="container">
          <div className={p.messageCard}>
            <img
              src="/Executing Trustee.png"
              alt="Hon. Shri Bipindada Shankarrao Kolhe, Executive Trustee"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Dear Parents and Students,</h2>
              <p>
                Sanjivani International School, Kharghar being a progressive institution is constantly engaged not
                only in improving the knowledge and skills of its students and their academic results but is also
                endeavouring to bring about their integral development through a host of well planned activities,
                personal example and healthy influence of the teachers.
              </p>
              <p>
                Our aim is to enable each one of our student to develop his/her talents and to realize his/her
                creative potential including responsibility for their own lives and achievement of their personal
                aims. Our teachers are trying their best to cope up with their expanded role in a fast changing
                world.
              </p>
              <p>
                We are always looking for new ways to involve parents in the life of the school and to keep them
                informed of the things we are doing.
              </p>
              <div className={p.signature}>
                Hon. Shri Bipindada Shankarrao Kolhe
                <small>Executive Trustee, Sanjivani Rural Education Society</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
