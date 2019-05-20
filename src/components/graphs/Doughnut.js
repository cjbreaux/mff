import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import 'chartjs-plugin-colorschemes';
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
    		data: specimens.map(specimen => specimen.qty),
    	}],
      options: {
        plugins: {
          colorschemes: {
            scheme: 'brewer.BrBG11'
          }
        }
      }
    };
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
});
