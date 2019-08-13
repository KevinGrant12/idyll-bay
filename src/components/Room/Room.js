import React from 'react';
import './Room.css';
import { Link } from 'react-router-dom';
// Update default image later
import defaultImg from '../../images/room-1.jpeg';

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="room-image">
        <img src={images[0] || defaultImg} alt="singel room"/>
        <div className="room-module-price">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
      </div>
    </article>
  );
};



export default Room;