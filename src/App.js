import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/nav/Navbar';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


import DynamicForm from './components/entries/DynamicForm';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="test">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/newentry' component={DynamicForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
