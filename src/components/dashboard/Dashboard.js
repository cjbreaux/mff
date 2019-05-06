import React, { Component} from 'react';
import './Dashboard.css';

import EntryList from './../entries/EntryList';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='leftPanel'>
          <EntryList />
        </div>
        <div className='rightPanel'></div>
      </div>
    );
  }
}

export default Dashboard;
