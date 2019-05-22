import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from './../../actions/entryActions';
import { getLocation } from './../../actions/locationActions';
import {Redirect} from 'react-router-dom';
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
    if (!this.props.auth.uid) return <Redirect to='/signin' />
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <fieldset className='bg-light-blue bn'>
            <h1 className='f1'> New Entry </h1>
            <div>
              <label htmlFor='entryName'>Entry Name</label>
              <button
                className='bg-dark-green h2 br2 b--black near-white fr'
                type='button'
                onClick={this.handleAddSpecimen}>
                + Mushroom
              </button>
            </div>
            <input
              className='w-50 br2 h2 mb3'
              type='text'
              id='entryName'
              onChange={this.handleChange} />
            <div>
              <label htmlFor='mushroom'>Mushroom</label>
              {this.state.specimens.map((specimen, index) => (
                <div className='flex flex-column' key={index}>
                  <input
                    className='w-30 br2 h2'
                    placeholder='Specimen Name'
                    type='text'
                    value={specimen.name}
                    onChange={this.handleSpecimenNameChange(index)} />
                  <div>
                    <input
                      className='w-20 br2 h2 mb3'
                      placeholder='Quantity'
                      type='number'
                      value={specimen.qty}
                      onChange={this.handleSpecimenQty(index)} />
                    <button
                      className='bg-dark-red h2 br2 b--black ml3'
                      type='button'
                      onClick={this.handleRemoveSpecimen(index)} >
                      X </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-column'>
              <label htmlFor='notes'>Notes</label>
              <textarea
                className='w-50 br2'
                placeholder='(click on the map to place location markers)'
                id='notes'
                onChange={this.handleChange} />
            </div>
          </fieldset>
        </form>
        <div className='mapContainer tc' >
          <TestMap specimens={this.state.specimens}/>
          <button
            className='h2 bg-blue br2 mt2'
            type='submit'>
            Finalize Entry
          </button>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    location: state.location,
    mapMarkers: state.mapMarkers,
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEntry: (entry) => dispatch(createEntry(entry)),
    getLocation: () =>dispatch(getLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
