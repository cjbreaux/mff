import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

import EntryList from './../entries/EntryList';
import NewEntryDetails from './../entries/NewEntryDetails';




class Dashboard extends Component {
  render() {
    const {entries, auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='dashboard'>
        <div className='leftPanel'>
          <EntryList entries={entries} auth={auth} />
        </div>
        <div className='rightPanel'>
          <NewEntryDetails  />
        </div>
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
  connect(mapStateToProps),
  firestoreConnect(props => {
    console.log(props)
    return [
      {collection: 'entries', doc: props.auth.uid}
    ]
  }),
)(Dashboard);
