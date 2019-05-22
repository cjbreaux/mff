import React from 'react';
import moment from 'moment'
import {connect} from 'react-redux';
import setSelectedEntry from '../../actions/entryActions';

function EntrySummary({entry,setSelectedEntry}) {

  return(
    <div
      className='listCard bg-lightest-blue ba bw1 b--blue br4 grow shadow-5' onClick={()=>setSelectedEntry(entry.entryId)}>
      <h2 className='f3'>{entry.entryName}</h2>
      <p>{entry.notes}</p>
      <p className='i'>{moment(entry.createdAt.toDate()).calendar()}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedEntry:(uuid) => dispatch(setSelectedEntry(uuid))
  }
}

export default connect(null, mapDispatchToProps)(EntrySummary);
