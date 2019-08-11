import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const LineButton = ({ value }) => {
  return(
    <button className="lineButton">
      {value}
      <IoIosArrowRoundForward />
    </button>
  );
};

export default LineButton;