import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);


@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){

    this.chartOptions = {
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Monthly Average Placements'
      },
      subtitle: {
          text: 'Source: Luminar Technolab'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Placements'
          }
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },

      credits:{
        enabled:false
      },

      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'MEARN',
          marker: {
              symbol: 'square'
          },
          data: [5, 6, 8, 13, 18, 21, 25, 22, 17, 12, 7]
  
      }, {
          name: 'Python',
          marker: {
              symbol: 'diamond'
          },
          data: [1, 3, 5, 10, 13, 14, 14, 11, 9, 5, 2]
      }]
  }


  }
}
