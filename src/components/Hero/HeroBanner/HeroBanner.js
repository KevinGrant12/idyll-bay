import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ title, subtitle, children, className }) => {
  return (
    <div className={className}>
      <h3>{subtitle}</h3>
      <hr/>
      {children}
    </div>
  );
};

export default HeroBanner;