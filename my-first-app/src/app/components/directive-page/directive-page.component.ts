import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.css']
})
export class DirectivePageComponent {
  displayEnable: boolean = false;
  possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  lengthOfCode: number = 40;
  displayText: string = '';
  displaysTexts: string[] = [];
  displayDetails() {
    !this.displayEnable
    this.displayText = this.makeRandom(this.lengthOfCode, this.possible);
    this.displaysTexts.push(this.displayText);
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
