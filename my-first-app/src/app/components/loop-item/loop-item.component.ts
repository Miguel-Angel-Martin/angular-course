import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loop-item',
  templateUrl: './loop-item.component.html',
  styleUrl: './loop-item.component.css'
})
export class LoopItemComponent {
  item_server_name = '';
  items_servers= ['TestServer1', 'TestServer2']
  dynamicTitle = 'loop-item';
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle(this.dynamicTitle);
  };

  itemCreatedServer() {
    this.items_servers.push(this.item_server_name +"created on: "+ new Date().getTime());
  }

}
