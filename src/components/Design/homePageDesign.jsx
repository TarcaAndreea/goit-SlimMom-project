import React from 'react';
import styles from '../Design/homePageDesign.css';

export function homePageDesign() {
  return (
    <section className={styles.design}>
      <div className={styles.design_vector}></div>
      <div className={styles.design_strawberry}></div>
      <div className={styles.design_layer}></div>
      <div className={styles.design_banana}></div>
    </section>
  );
}
