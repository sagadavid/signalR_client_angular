import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'real time charts on angular from .net server by signalR';

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
