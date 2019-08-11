import React from 'react';
import './Hero.css';

const Hero = ({children,hero}) => {
  return(
    <div className={hero}>
      {children}
    </div>
  );
};

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;