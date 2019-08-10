import React from 'react';
import './App.css';
import Amenities from './pages/Amenities';
import Home from './pages/Home';
import NearbyActivites from './pages/NearbyActivities';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route path="/amenities/" component={Amenities} />
        <Route path="/nearby-activities/" component={NearbyActivites} />
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
