import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
//router automatically passes down some props related to the route info
function EntryDetails(props) {
  console.log(props);
  const {entry} = props;
  if (entry) {
    return (
      <div>
      <h1>{entry.entryName}</h1>
      <p>Date goes here</p>
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
    entry
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'entries'}
  ])
)(EntryDetails);
