import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import HeroBanner from '../components/Hero/HeroBanner/HeroBanner';
import FrameButton from '../components/Buttons/FrameButton';
import Description from '../components/Description/Description';
import Services from '../components/Services/Services';
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';
import Specials from '../components/Specials/Specials';

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <HeroBanner
          className="heroBanner"
          title="private island paradise"
          subtitle="bungalows starting at $399"  
        >
        <Link to="/rooms">
          <FrameButton value="View Suites" />
        </Link>
        </HeroBanner>
      </Hero>
      <Description />
      <Services />
      <FeaturedRooms />
      <Specials />
    </React.Fragment>
  );
};

export default Home;