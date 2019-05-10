import React from 'react';


function NewEntry() {
  let _entryName;
  let _mushroom;
  let _qty;
  let _notes;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    console.log(_entryName.value, _mushroom.value, _qty.value, _notes.value)
    //run fb authentication with credentials
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h5> New Entry </h5>
        <div className='flex'>
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
        </div>
      </form>
    </div>
  );
}

export default NewEntry;
