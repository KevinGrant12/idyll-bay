import React from 'react';
import './Room.css';
import { Link } from 'react-router-dom';
// Update default image later
import defaultImg from '../../images/room-1.jpeg';
import { IoIosArrowRoundForward } from 'react-icons/io';
import PropTypes from 'prop-types';

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="room-image">
        <img src={images[0] || defaultImg} alt="single room"/>
        <div className="room-price">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`rooms/${slug}`} className="room-link">
          <span>Discover More <IoIosArrowRoundForward /></span>
        </Link>
      </div>
      <h4>{name}</h4>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;