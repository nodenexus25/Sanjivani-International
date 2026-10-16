import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import p from './page.module.css';
import styles from './AdmissionForm.module.css';

const forms = [
  { title: 'Admission Form (Nursery to Grade V)', size: '1.1 MB', file: '#' },
  { title: 'Admission Form (Grade VI to XII)', size: '1.3 MB', file: '#' },
  { title: 'Transport Registration Form', size: '0.5 MB', file: '#' },
  { title: 'Hostel Accommodation Form', size: '0.8 MB', file: '#' },
  { title: 'Medical Declaration Form', size: '0.4 MB', file: '#' },
  { title: 'Sibling Concession Form', size: '0.3 MB', file: '#' },
];

export default function AdmissionForm() {
  return (
    <>
      <PageHero title="Admission Form" subtitle="Download and submit the required forms." />
      <section className={p.page}>
        <div className="container">
          <SectionHeading
            title="Download Forms"
            subtitle="Please download, fill, and submit the relevant forms along with the required documents."
          />
          <div className={styles.grid}>
            {forms.map((f) => (
              <div key={f.title} className={styles.card}>
                <div className={styles.icon}>
                  <Icon name="file" size={32} />
                </div>
                <h3>{f.title}</h3>
                <span className={styles.size}>PDF · {f.size}</span>
                <a href={f.file} download className={styles.download}>
                  <Icon name="download" size={16} /> Download
                </a>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <Icon name="info" size={24} />
            <div>
              <h3>Important Notes</h3>
              <ul>
                <li>Forms must be filled completely and submitted in person or via email to contactsis@sanjivani.org.in.</li>
                <li>All fields marked with an asterisk (*) are mandatory.</li>
                <li>Incomplete forms will not be processed.</li>
                <li>For online submission, please use the <a href="/online-registration">Online Registration</a> form.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
