import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ChartModel } from '../interfaces/chartmodel.model';


@Injectable({
  providedIn: 'root'
})

export class SignalRService {
  public data: ChartModel[]=[];
  private hubCon: signalR.HubConnection;
  public broadcastedData: ChartModel[]=[];

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

  public braodcastData = () =>{

    const data = this.data.map(m => {
      const temp = {
        data: m.data,
        label: m.label
      }
      return temp;
    });
    this.hubCon.invoke('pustChartData', data).catch(error => console.log(error));

  }

   public broadcastData_Listener = () => {
      this.hubCon.on('broadcastchartdata', (data) => {
        this.broadcastedData = data;
      })
    }
}
