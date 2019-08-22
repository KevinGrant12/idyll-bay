import React from 'react';
import Room from '../../Room/Room';
import './RoomList.css';

export default function RoomList({rooms}) {
  if(rooms.length === 0) {
    return(
      <div className="empty-search">
        <h3>no rooms  matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomList container">
      <div className="container">
        {
          rooms.map(room => {
            return <Room key={room.id} room={room} />
          })
        }
      </div>
    </section>
  );
};