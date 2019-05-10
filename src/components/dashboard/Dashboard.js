import React, { Component} from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';

import EntryList from './../entries/EntryList';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const {entries} = this.props;
    return (
      <div className='dashboard'>
        <div className='leftPanel'>
          <EntryList entries={entries} />
        </div>
        <div className='rightPanel'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entry.entries
  }
}

export default connect(mapStateToProps)(Dashboard);
