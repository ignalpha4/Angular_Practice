import { Component } from '@angular/core';
import { ExamsService } from 'src/app/core/services/exams.service';
import { ChartConfiguration, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {

  data: any;
  scores: number[] = [];
  users: string[] = [];

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  barChartLabels: string[] = [];

  barChartData: ChartDataset<'bar'>[] = [
    { data: [], label: 'Test Scores' }
  ];

  constructor(private examService: ExamsService) {
    this.examService.examSubject.subscribe((exams: any) => {
      this.data = exams;
      console.log(this.data);
      
      this.scores = this.data.map((test: any) => test[test.length - 1].score);
      console.log(this.scores);
      
      this.users = this.data.map((test: any) => test[test.length - 1].username);
      this.updateChartData();
    });
  }

  updateChartData() {
    this.barChartData[0].data = this.scores;
    this.barChartLabels = this.users;
  }
}
