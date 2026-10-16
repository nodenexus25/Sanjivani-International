import React from 'react';
import { feeStructure, feeNotes } from '../data/fees.js';
import styles from './FeeTable.module.css';

const inr = (n) => '₹' + n.toLocaleString('en-IN');

export default function FeeTable() {
  return (
    <div className={styles.wrap}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Admission Fee (One-time)</th>
              <th>Tuition Fee (Quarterly)</th>
              <th>Annual Fee</th>
              <th>Transport (Annual, optional)</th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map((row) => (
              <tr key={row.id}>
                <td data-label="Grade"><strong>{row.grade}</strong></td>
                <td data-label="Admission Fee">{inr(row.admission)}</td>
                <td data-label="Tuition Fee">{inr(row.tuition)}</td>
                <td data-label="Annual Fee">{inr(row.annual)}</td>
                <td data-label="Transport">{inr(row.transport)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {feeNotes && feeNotes.length > 0 && (
        <ul className={styles.notes}>
          {feeNotes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
