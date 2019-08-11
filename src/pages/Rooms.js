import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import HeroBanner from '../components/Hero/HeroBanner/HeroBanner';
import FrameButton from '../components/Buttons/FrameButton';

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <HeroBanner
        title="bungalows"
        subtitle="picture perfect getaways from your life on land"
      >
      <Link to="/">
        <FrameButton value="return home" />
      </Link>

      </HeroBanner>
    </Hero>
  );
};

export default Rooms;