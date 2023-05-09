import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {
serverID: number =10;
serverStatus: string='offline';

getServerStatus(){
  return this.serverStatus;
}
}
