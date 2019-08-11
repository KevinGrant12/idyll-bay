import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const FrameButton = ({ value }) => {
  return(
    <button className="frameButton">
      {value}
      <IoIosArrowRoundForward />
    </button>
  );
};

export default FrameButton;