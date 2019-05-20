import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from './../../actions/entryActions';
import {Redirect} from 'react-router-dom';

class NewEntry extends React.Component {

  constructor() {
    super();
    this.state = {
      specimens: [{name: '', qty: ''}]
    };
  }

  handleSubmit = e => {
    const {createEntry, history} = this.props;
    e.preventDefault();
    console.log(this.state);
    createEntry(this.state);
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
                <div>
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEntry: (entry) => dispatch(createEntry(entry))
  }
}

export default connect(null, mapDispatchToProps)(NewEntry);
