import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  template:`<app-server-status></app-server-status>
  <app-server-status></app-server-status>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
