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
    {entryToDisplay ? <p>{entryToDisplay.mushroom}</p> : null}
    {entryToDisplay ? <p>{entryToDisplay.qty}</p> : null}
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
