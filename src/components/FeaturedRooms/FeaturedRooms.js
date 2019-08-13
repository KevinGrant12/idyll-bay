import React from 'react';
import { RoomContext } from '../../context';
import Room from '../Room/Room';
import Loading from '../Loading/Loading';
import './FeaturedRooms.css';

export default class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms : rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room}></Room>
    });
    return(
      <section className="featuredRooms">
        <h2>Featured Rooms</h2>
        <div className="container">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  };
};