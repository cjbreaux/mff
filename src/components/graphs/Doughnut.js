import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-colorschemes';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Change chart settings here, not in data object
import { defaults } from 'react-chartjs-2';
defaults.global.defaultFontColor = 'black';
defaults.global.legend.position = 'none';
defaults.global.defaultFontSize = 14;
defaults.global.tooltips = false;
// defaults.global.maintainAspectRatio = false;
// defaults.global.showTooltips = false;
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
            return context.chart.data.labels[context.dataIndex] + ' ' + value
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
        <Doughnut
        data={data}
        width={300}
        height={300}
        options={{maintainAspectRatio:false}} />
      </div>
    );
  }
});
