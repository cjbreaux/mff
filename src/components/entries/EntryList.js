import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';
import {Link} from 'react-router-dom';

function EntryList({entries}) {
  return(
    <div className='listContainer'>
      {entries && entries.map(entry => {
        return(
          <Link to={'/entry/' + entry.id}>
            <EntrySummary entry={entry} key={entry.id} />
          </Link>
        )
      })}
    </div>
  );
}

export default EntryList;
