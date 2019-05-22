import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-colorschemes';
// Change chart settings here, not in data object
import { defaults } from 'react-chartjs-2';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
defaults.global.defaultFontColor = 'black';
defaults.global.legend.position = 'left';
defaults.global.defaultFontSize = 14;
const createReactClass = require('create-react-class');

export default createReactClass({
  displayName: 'Doughnut',

  render() {

    const {specimens} = this.props.entryData;
    const data = {
    	labels:
    		specimens.map(specimen => specimen.name),
    	datasets: [{
    		data: specimens.map(specimen => specimen.qty),
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex]
          }
        }
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
