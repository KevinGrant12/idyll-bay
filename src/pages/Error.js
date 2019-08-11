import React from 'react';
import Hero from '../components/Hero/Hero';
import HeroBanner from '../components/Hero/HeroBanner/HeroBanner';
import FrameButton from '../components/Buttons/FrameButton';
import { Link } from 'react-router-dom';

const Error = () => {
  return(
    <Hero>
      <HeroBanner title="404" subtitle="page not found">
        <Link to="/">
          <FrameButton value="back to home" />
        </Link>
      </HeroBanner>
    </Hero>
  );
};

export default Error;