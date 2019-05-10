import React from 'react';
//router automatically passes down some props related to the route info
function EntryDetails(props) {
  const id = props.match.params.id
  return (
    <div>
      <h1>Entry Name - {id}</h1>
      <p>The date</p>
      <p>Mushroom - Qty</p>
      <p>Mushroom - Qty</p>
      <p>Mushroom - Qty</p>
      <p> Graph goes here? </p>
    </div>
  );
}

export default EntryDetails;
