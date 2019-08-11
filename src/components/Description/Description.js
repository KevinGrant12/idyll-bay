import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css';
import LineButton from '../../components/Buttons/LineButton';

const Description = () => {
  return(
    <div className="description-wrap container">
      <div className="description">
        <h3>Discover Idyll Bay</h3>
        <h5>Idyll Bay is the dream haven you have always desired. How will your adventure unfold?</h5>
        <p>Lobortis mattis aliquam faucibus purus in massa. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Amet purus gravida quis blandit turpis. Adipiscing vitae proin sagittis nisl. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Aliquam id diam maecenas ultricies mi eget. Enim tortor at auctor urna nunc id cursus metus. Mi quis hendrerit dolor magna eget. Quis lectus nulla at volutpat. Erat imperdiet sed euismod nisi porta lorem mollis. Velit ut tortor pretium viverra suspendisse potenti nullam ac.</p>
        <Link to="/rooms">
          <LineButton value="book your stay" />
        </Link>
      </div>
    </div>
  );
};

export default Description;