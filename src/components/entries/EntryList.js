import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';
import {Link} from 'react-router-dom';

//flashing incorrect text in bar on new user creation

function EntryList({entries, auth}) {
  console.log(entries)
  const uid = auth.uid;

  if (entries) {
    if (entries.length === 0) {
      return <div className='listContainer'>no entries</div>
    } else {
      return <div className='listContainer'>
      {entries && entries[0].entries.map((entry, index) => {
        return(
          <Link to={'/entry/' + entry.userId} key={index}>
          <EntrySummary entry={entry}  />
          </Link>
        )
      })}
      </div>
    }
  } else {
    return <p> ...loading </p>
  }
}

export default EntryList;
