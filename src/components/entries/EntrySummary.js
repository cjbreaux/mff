import React from 'react';
import moment from 'moment'
import {connect} from 'react-redux';
import setSelectedEntry from '../../actions/entryActions';

function EntrySummary({entry,setSelectedEntry}) {

  function topFunction() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(topFunction);
      window.scrollTo(0, c - c / 8);
    }
}

  return(
    <div
      className='bg-lightest-blue ba bw1 b--blue br4 grow shadow-5 mt2 pl3' onClick={()=>{setSelectedEntry(entry.entryId); topFunction()}}>
      <h2 className='f3'>{entry.entryName}</h2>
      <p>{entry.notes}</p>
      {entry.createdAt ? <p className='i'>{moment(entry.createdAt.toDate()).calendar()}</p> : null }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedEntry:(uuid) => dispatch(setSelectedEntry(uuid))
  }
}

export default connect(null, mapDispatchToProps)(EntrySummary);
