import { Component } from '@angular/core';

// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTooltip,
//   ApexStroke,
// } from 'ng-apexcharts';

@Component({
  selector: 'app-appex-chart',
  templateUrl: './appex-chart.component.html',
  styleUrls: ['./appex-chart.component.css'],
})
export class AppexChartComponent {
  months = [
    'ديسمبر',
    'نوفمبر',
    'أكتوبر',
    'سبتمبر',
    'أغسطس',
    'يوليو',
    'يونيو',
    'مايو',
    'أبريل',
    'مارس',
    'فبراير',
    'يناير',
  ];
}
