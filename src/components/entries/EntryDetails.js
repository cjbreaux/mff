import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';
//router automatically passes down some props related to the route info
function EntryDetails(props) {
  const {entry, auth} = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (entry) {
    return (
      <div>
      <h1>{entry.entryName}</h1>
      <p>{moment(entry.createdAt.toDate()).calendar()}</p>
      <p>{entry.mushroom} - {entry.qty}</p>
      <p>{entry.notes}</p>


      <p> Graph goes here? </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>....loading</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const entries = state.firestore.data.entries;
  const entry = entries ? entries[id] : null;
  return {
    entry,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'entries'}
  ])
)(EntryDetails);
