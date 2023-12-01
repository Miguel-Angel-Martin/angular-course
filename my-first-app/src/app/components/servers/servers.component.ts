import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* template:`<app-server-status></app-server-status>
  <app-server-status></app-server-status>`, */

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {


  lodashVersion: string;
  allowNewServer = false;
  serverCreationStatusBit: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
  servers: string[] = ['TestServer', 'TestServer 2'];
  constructor() {
    this.lodashVersion= _.VERSION;
        setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {

  };

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, and the name is ' + this.serverName;
    this.serverCreationStatusBit = true;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    return (event.target as HTMLInputElement).value;
  }
}
