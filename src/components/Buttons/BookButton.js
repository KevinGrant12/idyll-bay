import React from 'react';
import './Buttons.css';
import { FaUmbrellaBeach } from 'react-icons/fa';

const BookButton = () => {
  return (
    <button className="bookButton">
      <FaUmbrellaBeach />
      book
      </button>
  );
};

export default BookButton;