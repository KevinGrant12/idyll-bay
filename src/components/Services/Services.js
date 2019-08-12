import React from 'react';
import './Services.css';
import { FaCocktail, FaConciergeBell, FaUtensils, FaShip } from 'react-icons/fa';

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
      {
        icon: <FaConciergeBell />,
        title: "room service",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
      {
        icon: <FaUtensils />,
        title: "catered cabanas",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
      {
        icon: <FaShip />,
        title: "free fairy",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      }
    ]
  };
  render() {
    return(
      <section className="services">
        <h2>Services</h2>
        <div className="services-items container">
          {this.state.services.map((item, index) => {
            return(
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </article>
            );            
          })}
        </div>
      </section>
    );
  };
};