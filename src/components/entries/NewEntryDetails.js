import React from 'react';
import { connect } from 'react-redux';

function NewEntryDetails({entries,currentlySelectedEntry}) {
  let entryToDisplay;
  if (entries) {
     entries[0].entries.find(function(element) {
    if (element.entryId === currentlySelectedEntry) {
      entryToDisplay = element;
    }
  });
  return <div>
    {entryToDisplay ? <h1>{entryToDisplay.entryName}</h1> : null}
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
