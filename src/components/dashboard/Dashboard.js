import React, { Component} from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';
import {firestoreConnect, firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

import EntryList from './../entries/EntryList';




class Dashboard extends Component {
  render() {
    const {entries, auth} = this.props;
    console.log(entries);
    console.log(auth.uid);
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='dashboard'>
        <div className='leftPanel'>
          <EntryList entries={entries} auth={auth} />
        </div>
        <div className='rightPanel'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth
  }
}

//would like a way to pass in doc: `${auth.uid}` or equivalent to only pull the users doc instead of the entire list

export default compose(
  firestoreConnect( [
    {collection: 'entries'}
  ]),
  connect(mapStateToProps),
)(Dashboard);
