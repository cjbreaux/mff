import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/nav/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="test">
          <Navbar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
