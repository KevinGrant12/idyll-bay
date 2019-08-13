import React from 'react';
import './App.css';
import Dining from './pages/Dining';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
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
        <Route path="/dining/" component={Dining} />
        <Route path="/experiences/" component={Experiences} />
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
