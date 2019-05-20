import React from 'react';
import moment from 'moment'
import {connect} from 'react-redux';
import setSelectedEntry from '../../actions/entryActions';

function EntrySummary({entry,dispatch}) {
  function handleClick(uuid) {
    dispatch(setSelectedEntry(uuid));
  }

  return(
    <div className='listCard' onClick={()=>handleClick(entry.entryId)}>
      <h2>{entry.entryName}</h2>
      <p>{entry.notes}</p>
    </div>
  );
}

export default connect()(EntrySummary);


// <p>{moment(entry.createdAt.toDate()).calendar()}</p>
