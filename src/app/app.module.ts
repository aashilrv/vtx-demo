import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list/task-list-item/task-list-item.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { PlotlyViaCDNModule, PlotlyModule } from 'angular-plotly.js';
PlotlyViaCDNModule.plotlyVersion = '1.54.1';
PlotlyViaCDNModule.plotlyBundleNames = ['basic'];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    //
    ToggleButtonComponent,
    // TaskListComponent,
    // TaskListItemComponent,
    FeedbackListComponent,
    BarChartComponent,
    LineChartComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PlotlyViaCDNModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
