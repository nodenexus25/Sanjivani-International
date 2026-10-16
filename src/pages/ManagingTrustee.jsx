import React from 'react';
import PageHero from '../components/PageHero.jsx';
import p from './page.module.css';

export default function ManagingTrustee() {
  return (
    <>
      <PageHero title="Managing Trustee's Message" subtitle="A message from Hon. Shri Ishan Kolhe." />
      <section className={p.page}>
        <div className="container">
          <div className={p.messageCard}>
            <img
              src="/Managing trustee.avif"
              alt="Hon. Shri Ishan Kolhe, Managing Trustee"
              loading="lazy"
            />
            <div className={p.contentBlock}>
              <h2>Dear Parents and Students,</h2>
              <p>
                Sanjivani International School, Kharghar aims at encouraging the development of intellectual
                abilities which will enable the students to fulfill their potential for successful and challenging
                careers and to become life-long learners.
              </p>
              <p>
                My personal feeling is that in today&rsquo;s rapidly changing scenario, schools have the most
                responsible and important role to play. The school should attempt to make students aware of the
                modes of thought, cultures and characteristics of different religions and races in order to build
                friendship and understanding of diversity of value systems.
              </p>
              <p>
                The process begins through social interaction within the school before the students step into the
                real world. The most important part is that students at school should be encouraged to take an
                active interest in the welfare of the local and global environment and to seek to influence
                attitudes and decisions relating to environmental challenges in the society.
              </p>
              <p>
                Sanjivani International School provides a stimulating and enriched environment so that the children
                can enjoy all aspects of their learning. We value regular contact with parents / guardians and
                regard the home-school partnership as an essential part of the education process.
              </p>
              <div className={p.signature}>
                Hon. Shri Ishan Kolhe
                <small>Trustee, Sanjivani International School, Kharghar</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
