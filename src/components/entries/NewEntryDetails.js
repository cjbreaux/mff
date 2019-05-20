import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

//refactor later to show a default selection

function NewEntryDetails({entries,currentlySelectedEntry}) {
  let entryToDisplay;
  if (entries) {
     entries[0].entries.find(function(element) {
    if (element.entryId === currentlySelectedEntry) {
      entryToDisplay = element;
    }
  });
  return <div>
    {entryToDisplay ? <h1>{entryToDisplay.entryName}</h1> : <h1>Select an Entry</h1>}
    {entryToDisplay ? <p>{moment(entryToDisplay.createdAt.toDate()).calendar()}</p> : null}
    {entryToDisplay ? <div>{entryToDisplay.specimens.map((specimen, index) => (
      <p key={index}>{specimen.name} - {specimen.qty}</p>
    ))}</div> : null}
    {entryToDisplay ? <p>{entryToDisplay.notes}</p> : null}
  </div>
  } else {
    return <p> ...loading </p>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    currentlySelectedEntry: state.entry.currentlySelectedEntry
  }
}

export default connect(mapStateToProps)(NewEntryDetails);
