import React from 'react';

function EntrySummary({entry}) {
  return(
    <div className='listCard'>
      <h2>{entry.entryName}</h2>
      <p>{entry.notes}</p>
      <p>{entry.date}</p>
    </div>
  );
}

export default EntrySummary;
