import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from './../../actions/entryActions';
import { getLocation } from './../../actions/locationActions';
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
    if (Object.keys(mapMarkers).length === 0 && mapMarkers.constructor === Object) {
      createEntry({...this.state, lat: location.latitude, lng: location.longitude, mapMarkers: []});
    } else {
      createEntry({...this.state, lat: location.latitude, lng: location.longitude, mapMarkers });
    }
    history.push('/');
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
      specimens: this.state.specimens.filter((s, pos) => index !== pos),
      mapMarkers: this.props.mapMarkers.filter((s, pos) => index !== pos)
    });
    console.log(this.props);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className='f1'> New Entry </h1>
          <fieldset className='flex'>
            <div>
              <label htmlFor='entryName'>Entry Name</label>
              <input
                className='w-50 br2 h2 ml3'
                type='text'
                id='entryName'
                onChange={this.handleChange} />
              <button
                className='bg-dark-green h2 br2 b--black fr near-white'
                type='button'
                onClick={this.handleAddSpecimen}>
                + Mushroom
              </button>
            </div>
              {this.state.specimens.map((specimen, index) => (
                <div key={index}>
                <label htmlFor='mushroom'>Mushroom</label>
                <input
                  className='w-30 br2 h2 ml3'
                  placeholder='Specimen Name'
                  type='text'
                  value={specimen.name}
                  onChange={this.handleSpecimenNameChange(index)} />
                <input
                  className='w-20 br2 h2 ml3'
                  placeholder='Quantity'
                  type='number'
                  value={specimen.qty}
                  onChange={this.handleSpecimenQty(index)} />
                <button
                  className='bg-dark-red h2 br2 b--black'
                  type='button'
                  onClick={this.handleRemoveSpecimen(index)} >
                  X </button>
                </div>
              ))}
            <div>
              <label htmlFor='notes'>Notes</label>
              <textarea
                className='w-50 br2'
                id='notes'
                onChange={this.handleChange} />
            </div>
            <div>
              <button type='submit'>Finalize Entry</button>
            </div>
          </fieldset>
        </form>
        <div className='mapContainer'>
          <TestMap specimens={this.state.specimens}/>
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
