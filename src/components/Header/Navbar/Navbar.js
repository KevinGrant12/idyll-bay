import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className={this.props.isOpen ? "navbar visible" : "navbar"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/amenities">Amenities</Link>
          </li>
          <li>
            <Link to="/amenities">Nearby Activities</Link>
          </li>
        </ul>
        <button>book</button>
      </nav>
    );
  };
};