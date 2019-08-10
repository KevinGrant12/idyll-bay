import React from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaAlignRight } from 'react-icons/fa';
import './Header.css';

export default class Header extends React.Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState(() => {
      return ({ isOpen: !this.state.isOpen })
    })
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="Idyll Logo"/>
          </Link>
          <Navbar isOpen={this.state.isOpen}/>
          <button onClick={this.handleToggle} className="header_mobile-icon">
            <FaAlignRight />
          </button>
        </div>
      </header>
    );
  };
};