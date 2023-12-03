import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-loop-item',
  templateUrl: './loop-item.component.html',
  styleUrl: './loop-item.component.css'
})
export class LoopItemComponent {
  item_server_name = '';
  items_servers= []
  dynamicTitle = 'loop-item';
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle(this.dynamicTitle);
  };

  itemCreatedServer() {
    this.items_servers.push(this.item_server_name + " created on: " + moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'));
    this.item_server_name = '';
  }

}
