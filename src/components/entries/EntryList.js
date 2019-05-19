import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';
import {Link} from 'react-router-dom';

function EntryList({entries}) {
  return(
    <div className='listContainer'>
      {entries && entries[0].entries.map((entry, index) => {
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
