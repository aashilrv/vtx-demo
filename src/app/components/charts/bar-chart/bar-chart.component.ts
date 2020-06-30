import { Component, Input, OnInit }        from '@angular/core';
import { BarChart }                        from 'src/app/components/charts/bar-chart/bar-chart.interface';
import { chartLayout, chartMarkerPrimary } from 'src/app/components/charts/chart-layout';
import { ChartType }                       from 'src/app/components/charts/chart-type';

// https://plotly.com/javascript/bar-charts/#basic-bar-chart

@Component({
  selector: 'srp-bar-chart',
  template: '<plotly-plot [data]="chartData.data" [layout]="chartData.layout"></plotly-plot>'
})
export class BarChartComponent implements OnInit {
    @Input() data: BarChart;

    public chartData: any;
    private readonly chartType: ChartType = 'bar';

    public ngOnInit(): void {
        // Sample data
        this.data = {
          y: [1, 2, 3],
          x: ['giraffes', 'monkeys', 'orangutans']
        };

        this.initChart();
    }

    private initChart() {
        this.chartData = {
            data: [
                {
                    x:      this.data.x,
                    y:      this.data.y,
                    type:   this.chartType,
                    marker: chartMarkerPrimary
                },
            ],
            layout: {
              ...chartLayout
            }
        };
    }
}
