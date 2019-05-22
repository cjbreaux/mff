import React from 'react';
import EntrySummary from './EntrySummary';


//flashing incorrect text in bar on new user creation

function EntryList({entries, auth}) {
  if (entries) {
    if (entries.length === 0) {
      let noEntry = {entryName: 'No Entry to Display', notes: 'Click the folder icon to add an entry', createdAt: null}
      return <EntrySummary entry={noEntry} />
    } else {
      return <div>
      {entries && entries[0].entries.map((entry, index) => {
        return(

          <EntrySummary entry={entry} key={index} />

        )
      })}
      </div>
    }
  } else {
    return <p> ...loading </p>
  }
}

export default EntryList;
