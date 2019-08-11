import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ title, subtitle, children }) => {
  return (
    <div className="heroBanner">
    <h3>{subtitle}</h3>
    <hr/>
      {children}
    </div>
  );
};

export default HeroBanner;