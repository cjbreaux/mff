import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';
import {Link} from 'react-router-dom';

function EntryList({entries, auth}) {
  const uid = auth.uid;
  let userEntry;
  if (entries) {
     userEntry = entries.find(e => e.id === uid);
  }
  //this is a workaround to find a specific users collection of entries

  return(
    <div className='listContainer'>
      {entries && userEntry.entries.map((entry, index) => {
        return(
          <Link to={'/entry/' + entry.userId} key={index}>
            <EntrySummary entry={entry}  />
          </Link>
        )
      })}
    </div>
  );
}

export default EntryList;
