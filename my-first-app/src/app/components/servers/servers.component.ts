import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* template:`<app-server-status></app-server-status>
  <app-server-status></app-server-status>`, */

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatusBit: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
  servers: string[] = ['TestServer', 'TestServer 2'];
  constructor() {
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
    console.log("==>> ~ file: servers.component.ts:29 ~ ServersComponent ~ onUpdateServerName ~ event:", event);
    return (event.target as HTMLInputElement).value;
  }
}
