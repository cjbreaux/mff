import React from 'react';
import './Entries.css';
import EntrySummary from './EntrySummary';

function EntryList() {
  return(
    <div className='listContainer'>
      <EntrySummary />
      <EntrySummary />
      <EntrySummary />
    </div>
  );
}

export default EntryList;
