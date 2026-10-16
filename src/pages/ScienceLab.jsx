import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import p from './page.module.css';

export default function ScienceLab() {
  return (
    <>
      <PageHero title="Science Laboratories" subtitle="Hands-on experimentation brings concepts to life." />
      <section className={p.page}>
        <div className="container">
          <div className={p.grid2}>
            <div className={p.contentBlock}>
              <SectionHeading eyebrow="Campus" title="Science Laboratories" center={false} />
              <p>
                To understand the concepts of science, one has to look beyond the books and conventional classroom
                teaching. Effective teaching and learning of science involves seeing, handling real objects and
                materials. Children are able to retain the knowledge for longer when they see the experiments
                being performed in front of their eyes.
              </p>
              <p>
                Science lab equipment allows students to interact directly with the data gathered. They get a
                first-hand learning experience by performing various experiments on their own. Students are made
                to use the models and understand different scientific theories and concepts.
              </p>
              <p>
                SIS provides well equipped Science Labs which make teaching and learning easy for the students.
                There are several scientific theories and concepts that are difficult to explain directly from the
                books. Anatomy models, Physics science kits and Chemistry science kits, for instance, make it
                easy to understand the otherwise complex theories of science.
              </p>
            </div>
            <div className={p.imageBox}>
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" alt="Science Laboratory" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
