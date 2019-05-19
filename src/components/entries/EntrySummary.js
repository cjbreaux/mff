import React from 'react';
import moment from 'moment'

function EntrySummary({entry}) {
  console.log(entry)
  return(
    <div className='listCard'>
      <h2>{entry.entryName}</h2>
      <p>{entry.notes}</p>
    </div>
  );
}

export default EntrySummary;


// <p>{moment(entry.createdAt.toDate()).calendar()}</p>
