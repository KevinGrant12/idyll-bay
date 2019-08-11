import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import BookButton from '../../Buttons/BookButton';

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className={this.props.isOpen ? "navbar visible" : "navbar"}>
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/rooms">Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/amenities">Amenities</NavLink>
          </li>
          <li>
            <NavLink to="/nearby-activities">Nearby Activities</NavLink>
          </li>
        </ul>
        <BookButton />
      </nav>
    );
  };
};