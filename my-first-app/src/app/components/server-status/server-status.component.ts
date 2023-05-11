import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {
serverID: number =10;
serverStatus: string='offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

getServerStatus(){
  return this.serverStatus;
}
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
