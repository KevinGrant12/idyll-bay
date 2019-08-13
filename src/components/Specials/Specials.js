import React from 'react';
import LineButton from '../Buttons/LineButton';
import './Specials.css';
import Special1 from '../../images/special-1.jpg';
import Special2 from '../../images/special-2.jpg';
import Special3 from '../../images/special-3.jpg';

const Specials = () => {
  return(
    <section className="specials">
      <h2>First Stay Specials</h2>
      <div className="container">
        <article className="special">
          <div className="special-image">
            <img src={Special1} alt="dining special"/>
          </div>
          <div className="special-content">
            <h3>30% off your first dining experience</h3>
            <p>Dolor sit amet consectetur adipiscing elit pellentesque. Venenatis cras sed felis eget. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Et leo duis ut diam quam nulla porttitor massa.</p>
            <LineButton value="learn more"></LineButton>          
          </div>
        </article>
        <article className="special">
          <div className="special-image">
            <img src={Special2} alt="dining special"/>
          </div>
          <div className="special-content">
            <h3>Swimming lessons with the locals</h3>
            <p>Dolor sit amet consectetur adipiscing elit pellentesque. Venenatis cras sed felis eget. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Et leo duis ut diam quam nulla porttitor massa.</p>
            <LineButton value="learn more"></LineButton>          
          </div>
        </article>
        <article className="special">
          <div className="special-image">
            <img src={Special3} alt="dining special"/>
          </div>
          <div className="special-content">
            <h3>Enjoy 2 free ukele lessons on the beach</h3>
            <p>Dolor sit amet consectetur adipiscing elit pellentesque. Venenatis cras sed felis eget. Amet cursus sit amet dictum sit. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Et leo duis ut diam quam nulla porttitor massa.</p>
            <LineButton value="learn more"></LineButton>          
          </div>
        </article>
      </div>
    </section>
  );
};

export default Specials;