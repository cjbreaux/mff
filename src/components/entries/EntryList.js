import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';

function EntryList({entries}) {
  return(
    <div className='listContainer'>
      {entries && entries.map(entry => {
        return(
          <EntrySummary entry={entry} key={entry.id} />
        )
      })}
    </div>
  );
}

export default EntryList;
