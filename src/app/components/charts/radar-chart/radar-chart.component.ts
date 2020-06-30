import { Component, Input, OnInit } from '@angular/core';
import { chartLayout }              from 'src/app/components/charts/chart-layout';
import { ChartType }                from 'src/app/components/charts/chart-type';
import { RadarChart }               from 'src/app/components/charts/radar-chart/radar-chart.interface';

// https://plotly.com/javascript/radar-chart/

@Component({
  selector: 'srp-radar-chart',
  template: '<plotly-plot [data]="chartData.data" [layout]="chartData.layout"></plotly-plot>'
})
export class RadarChartComponent implements OnInit {
  @Input() data: RadarChart;

  public chartData: any;
  private readonly chartType: ChartType = 'scatterpolar';

  public ngOnInit(): void {
    // Sample data
    this.data = {
      values: [39, 28, 8, 7, 28, 39],
      labels: ['A', 'B', 'C', 'D', 'E', 'A']
    };

    this.initChart();
  }

  private initChart() {
    this.chartData = {
      data: [
        {
          r:     this.data.values,
          theta: this.data.labels,
          type:  this.chartType,
          fill:  'toself',
          name: 'name'
        }
      ],

      layout: {
        ...chartLayout,
        polar: {
          radialaxis: {
            visible: true,
          }
        },
        showlegend: true
      }
    };
  }

}
