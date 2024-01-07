import React from 'react';
import css from '../Design/HomePageDesign.module.css';
import vector from '../../Images/vectorgray-D.png';

const HomePageDesign = ({ children }) => {
  return (
    <section className={css.design}>
      <div className={css.design_vector}></div>
      <div className={css.design_strawberry}></div>
      <div className={css.design_layer}></div>
      <div className={css.design_banana}></div>
      {children}
    </section>
  );
};

export default HomePageDesign;
