import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import HeroBanner from '../components/Hero/HeroBanner/HeroBanner';
import FrameButton from '../components/Buttons/FrameButton';
import RoomsContainer from '../components/Rooms/RoomsContainer';

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <HeroBanner
          className="heroBanner"
          title="bungalows"
          subtitle="picture perfect getaways from your life on land"
        >
        <Link to="/">
          <FrameButton value="return home" />
        </Link>

        </HeroBanner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  );
};

export default Rooms;