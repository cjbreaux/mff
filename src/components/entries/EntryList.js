import React from 'react';
import EntrySummary from './EntrySummary';


//flashing incorrect text in bar on new user creation

function EntryList({entries, auth}) {
  if (entries) {
    if (entries.length === 0) {
      return <div className='listContainer'>no entries</div>
    } else {
      return <div className='listContainer'>
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
