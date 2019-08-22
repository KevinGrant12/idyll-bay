import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../../../context';
import './RoomFilter.css';

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  return(
    <section className="filter">
      <div className="container">
        <h2>Search Rooms</h2>
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
};