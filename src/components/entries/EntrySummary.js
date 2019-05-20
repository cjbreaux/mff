import React from 'react';
import moment from 'moment'
import {connect} from 'react-redux';
import setSelectedEntry from '../../actions/entryActions';

function EntrySummary({entry,setSelectedEntry}) {
  function handleClick(uuid) {
    setSelectedEntry(uuid);
  }

  return(
    <div className='listCard' onClick={()=>handleClick(entry.entryId)}>
      <h2>{entry.entryName}</h2>
      <p>{entry.notes}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedEntry:(uuid) => dispatch(setSelectedEntry(uuid))
  }
}

export default connect(null, mapDispatchToProps)(EntrySummary);


// <p>{moment(entry.createdAt.toDate()).calendar()}</p>
