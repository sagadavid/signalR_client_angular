import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'real time charts on angular from .net server by signalR';

  public chartOptions: any = {

    scalesShowVerticalLines: true,
    responsive: true,
    sclaes: { yAxes: [{ ticks: { beginAtZero: true } }] }
  }
  public chartLabels: string[] = ['real time data for bar chart'];
  public chartType: ChartType = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [
    { backgroundColor: '#5491DA' },
    { backgroundColor: '#E74C3C' },
    { backgroundColor: '#82E0AA' },
    { backgroundColor: '#E5E7E9' }
  ];

  constructor(public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit(): void {
    this.signalRService.startCon();
    this.signalRService.pustChartData_Listener();
    this.startHttpRequest();
  };

  private startHttpRequest = () => {
      this.http.get('https://localhost:7216/api/chart')
        .subscribe(res => { console.log(res) });
  }


}
