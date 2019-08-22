import React from 'react';
import RoomFilter from './RoomFilter/RoomFilter';
import RoomList from './RoomList/RoomList';
import { withRoomConsumer } from '../../context';
import Loading from '../Loading/Loading';

function RoomsContainer({ context }){
  const { loading, sortedRooms, rooms } = context;
  if(loading) {
    return <Loading />
  }
  return (
    <React.Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms}/>
    </React.Fragment>
  );
}

export default withRoomConsumer(RoomsContainer);