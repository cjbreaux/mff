import React from 'react';
import {connect} from 'react-redux';
import {createEntry} from './../../actions/entryActions';
import {Redirect} from 'react-router-dom';

//trying out fieldset instead of regular div, more semantic but adds styling


function NewEntry({createEntry, auth}) {
  let _entryName;
  let _mushroom;
  let _qty;
  let _notes;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    console.log(_entryName.value, _mushroom.value, _qty.value, _notes.value)
    //run fb authentication with credentials
    createEntry({entryName: _entryName.value, mushroom:_mushroom.value, qty: _qty.value, notes:_notes.value})
  }
  if (!auth.uid) return <Redirect to='/signin' />
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h5> New Entry </h5>
        <fieldset className='flex'>
          <div>
            <label htmlFor='entryName'>Entry Name</label>
            <input
              type='text'
              id='entryName'
              ref={(input)=> {_entryName = input;}} />
          </div>
          <div>
            <label htmlFor='mushroom'>Mushroom</label>
            <input
              type='text'
              id='mushroom'
              ref={(input)=> {_mushroom = input;}} />
          </div>
          <div>
            <label htmlFor='qty'>Quantity</label>
            <input
              type='number'
              id='qty'
              ref={(input)=> {_qty = input;}} />
          </div>
          <div>
            <label htmlFor='notes'>Notes</label>
            <textarea
              id='notes'
              ref={(textarea)=> {_notes = textarea;}} />
          </div>
          <div>
            <button type='submit'>Add New Entry</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createEntry: (entry) => dispatch(createEntry(entry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
