import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from './../../actions/entryActions';
import { getLocation } from './../../actions/locationActions';
import { Redirect } from 'react-router-dom';
import TestMap from './../maps/TestMap';


class NewEntry extends React.Component {

  constructor(props) {
    super(props);
    props.getLocation();
    this.state = {
      specimens: [{name: '', qty: ''}]
    };
  }

  handleSubmit = e => {
    const {createEntry, history, location, mapMarkers} = this.props;
    e.preventDefault();
    const results = mapMarkers.map((mark => {return Object.assign({}, {lat: mark.lat, lng: mark.lng})})); //need to transform this object before I can upload to firebase
    createEntry({...this.state, lat: location.latitude, lng: location.longitude, mapMarkers: results});
    // history.push('/');
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSpecimenNameChange = index => e => {
    const newSpecimen =
    this.state.specimens.map((specimen, pos) => {
      if (index !== pos) return specimen;
      return {...specimen, name: e.target.value}
    });
    this.setState({specimens: newSpecimen})
  }

  handleSpecimenQty = index => e => {
    const newSpecimen =
    this.state.specimens.map((specimen, pos) => {
      if (index !== pos) return specimen;
      return {...specimen, qty: e.target.value}
    });
    this.setState({specimens: newSpecimen})
  }

  handleAddSpecimen = () => {
    this.setState({
      specimens: this.state.specimens.concat([{name: '', qty: ''}])
    });
  }

  handleRemoveSpecimen = index => () => {
    this.setState({
      specimens: this.state.specimens.filter((s, pos) => index !== pos)
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5> New Entry </h5>
          <fieldset className='flex'>
            <div>
              <label htmlFor='entryName'>Entry Name</label>
              <input
                type='text'
                id='entryName'
                onChange={this.handleChange} />
            </div>
              {this.state.specimens.map((specimen, index) => (
                <div key={index}>
                <label htmlFor='mushroom'>Mushroom</label>
                <input
                  type='text'
                  value={specimen.name}
                  onChange={this.handleSpecimenNameChange(index)} />
                <label htmlFor='qty'>Qty</label>
                <input
                  type='number'
                  value={specimen.qty}
                  onChange={this.handleSpecimenQty(index)} />
                <button
                  type='button'
                  onClick={this.handleRemoveSpecimen(index)} >
                  X </button>
                </div>
              ))}
            <div>
              <label htmlFor='notes'>Notes</label>
              <textarea
                id='notes'
               onChange={this.handleChange} />
            </div>
            <div>
              <button type='button' onClick={this.handleAddSpecimen}>
              Add Another
              </button>
              <button type='submit'>Add New Entry</button>
            </div>
          </fieldset>
        </form>
        <div className='mapContainer'>
          <TestMap />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    location: state.location,
    mapMarkers: state.mapMarkers
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEntry: (entry) => dispatch(createEntry(entry)),
    getLocation: () =>dispatch(getLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
