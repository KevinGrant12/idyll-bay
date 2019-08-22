import React from 'react';
import Hero from '../components/Hero/Hero';
import HeroBanner from '../components/Hero/HeroBanner/HeroBanner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import LineButton from '../components/Buttons/LineButton';
import FrameButton from '../components/Buttons/FrameButton';
import StyledHero from '../components/Hero/StyledHero';

export default class SingleRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug
    };
  };
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if(!room) {
      return (
        <div className="error">
          <h3>room could not be found...</h3>
          <Link to="/rooms">
            <LineButton value="back to rooms" />
          </Link>
        </div>
      );
    };
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg,...defaultImg] = images;
    console.log({name})
    return(
      <React.Fragment>
        <StyledHero image={ images[0] }>
          <HeroBanner className="heroBanner heroBanner_single" subtitle={`${name} room`}>
            <Link to="/rooms">
              <FrameButton value="back to rooms"></FrameButton>
            </Link>
          </HeroBanner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images container">
            {defaultImg.map((item,index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info container">
            <div className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </div>
            <div className="info">
              <h3>info</h3>
              <h5>prince: ${price}</h5>
              <h5>size: {size} SQFT</h5>
              <h5>max capacity: { capacity > 1 ? `${capacity} people` : `${capacity} person`}</h5>
              <h5>pets: {pets ? "yes" : "no pets allowed"}</h5>
              <h5>{breakfast && "free breakfast included"}</h5>
            </div>
          </div>
        </section>
        <section className="room-extras container">
          <h5>extras</h5>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>- {extra}</li>
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  };
};