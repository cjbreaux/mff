import React, { Component} from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

import EntryList from './../entries/EntryList';

class Dashboard extends Component {
  render() {
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
    entries: state.firestore.ordered.entries
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'entries'}
  ])
)(Dashboard);
