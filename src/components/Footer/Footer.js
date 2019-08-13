import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <h5>contact us</h5>
          <li><strong>reservations: </strong> 1 800-343-9223</li>
          <li><strong>lobby:  </strong>1 466-434-8372</li>
          <li><strong>email: </strong>reservations@idyllbay.com</li>
          <li><strong>address: </strong>4085 Near Da' Beach, Idyll Island</li>
        </ul>
        <ul className="footer-list">
          <h5>Explore Idyll Bay</h5>
          <li>contact us</li>
          <li>locate us</li>
          <li>gift cards</li>
          <li>invite a friend</li>
          <li>privacy policy</li>
          <li>terms & conditions</li>
        </ul>
        <ul className="footer-list">
          <h5>Join Our Team</h5>
          <li>Travel Guides</li>
          <li>Event Planners</li>
          <li>Media Moguls</li>
          <li>Wildlife Specialists</li>
          <li>Careers</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;