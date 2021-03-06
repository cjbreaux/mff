import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import DoughnutExample from './../graphs/Doughnut';
import EntryMap from './../maps/EntryMap';

//refactor later to show a default selection
//ideally show the latest entry

function NewEntryDetails({entries,currentlySelectedEntry, entry}) {
  let entryToDisplay;
  if (entries) {
     entries.length > 0 && entries[0].entries.find(function(element) {
    if (element.entryId === currentlySelectedEntry) {
      entryToDisplay = element;
    }
  });
return (
    <div className='ba bw1 br4 mt2 pl3 bg-moon-gray'>
      {entryToDisplay ? <h1>{entryToDisplay.entryName}</h1> : <h1 className='h5 tc'>Select an Entry</h1>}
      {entryToDisplay ? <p>{moment(entryToDisplay.createdAt.toDate()).calendar()}</p> : null}
      {entryToDisplay ? <DoughnutExample id='map' entryData={entryToDisplay}  /> : null}
      {entryToDisplay ? <EntryMap lat={entryToDisplay.lat} lng={entryToDisplay.lng} mapMarkers={entryToDisplay.mapMarkers} entry={entryToDisplay} /> : null}
      {entryToDisplay ? <h2>Notes</h2> : null}
      {entryToDisplay ? <p>{entryToDisplay.notes}</p> : null}
    </div>
  )} else {
    return <p> ...loading </p>
  }
}

const mapStateToProps = state => {
  return {
    currentlySelectedEntry: state.entry.currentlySelectedEntry,
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {collection: 'entries', doc: props.auth.uid}
    ]
  }),
)(NewEntryDetails);

//used map function, graph should be better way to display this info
// {entryToDisplay ? <div>{entryToDisplay.specimens.map((specimen, index) => (
//   <p key={index}>{specimen.name} - {specimen.qty}</p>
// ))}</div> : null}
