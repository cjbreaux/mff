import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/nav/Navbar';
import EntryDetails from './components/entries/EntryDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="test">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/entry/:id' component={EntryDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
