import React, { Component} from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

import EntryList from './../entries/EntryList';


class Dashboard extends Component {
  render() {
    const {entries, auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    console.log(this.props.entries)
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
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'entries', doc: "7KmuunGH6JN31O23O5FEThsNEbs2"}
  ])
)(Dashboard);
