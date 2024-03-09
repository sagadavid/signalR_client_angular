import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ChartModel } from '../interfaces/chartmodel.model';


@Injectable({
  providedIn: 'root'
})

export class SignalRService {
  public data: ChartModel[]=[];
  private hubCon: signalR.HubConnection;

  public startCon = () => {

    this.hubCon
      .start()
      .then(() => console.log('connection started'))
    .catch(err=>console.log('error while starting connection: '+ err))
  }
  public pustChartData_Listener = () => {
    this.hubCon.on('pustChartData', (data) => {
      this.data = data;
      console.log(data);
    });
}
  constructor() {
     this.hubCon = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7216/chart')
      .build();
  }
}
