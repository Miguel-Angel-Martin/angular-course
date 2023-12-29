import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  _VERSION: string = _.VERSION;
  momentVersion: string = moment.version;
  constructor(){}
  onInit(){

  

  }

}
