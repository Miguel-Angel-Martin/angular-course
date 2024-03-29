import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter < { serverName: string, serverContent: string }>();

  constructor () {}

  ngOnInit(): void {
      
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
    //this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  } 

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
    //this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }


}
