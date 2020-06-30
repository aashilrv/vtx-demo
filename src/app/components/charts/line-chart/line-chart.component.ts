import { Component, Input, OnInit } from '@angular/core';
import { chartLayout }              from 'src/app/components/charts//chart-layout';
import { ChartType }                from 'src/app/components/charts//chart-type';
import { LineChart }                from 'src/app/components/charts//line-chart/line-chart.interface';

// https://plotly.com/javascript/line-charts/#basic-line-plot

@Component({
  selector: 'srp-line-chart',
  template: '<plotly-plot [data]="chartData.data" [layout]="chartData.layout"></plotly-plot>'
})
export class LineChartComponent implements OnInit {
  @Input() data: LineChart[];

  public chartData: any;
  private readonly chartType: ChartType = 'scatter';

  public ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    this.chartData = {
      data: [],
      layout: {
        ...chartLayout,
        responsive: true
      }
    };

    this.data?.forEach((chartData: LineChart) => {
      this.chartData?.data?.push({
        ...chartData,
        type:   this.chartType
      });
    });
  }
}
