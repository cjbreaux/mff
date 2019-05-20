import React from 'react';
import {Doughnut} from 'react-chartjs-2';
const createReactClass = require('create-react-class');

export default createReactClass({
  displayName: 'DoughnutExample',

  render() {

    const {specimens} = this.props.entryData;
    const data = {
    	labels: 
    		specimens.map(specimen => specimen.name)
    	,
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    );
  }
});
