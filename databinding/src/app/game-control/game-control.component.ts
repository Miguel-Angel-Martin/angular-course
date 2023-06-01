import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;
  interval: any;
  ngOnInit(): void {
      
  }
onStartGame(){
  this.interval = setInterval(()=>{
    this.intervalFired.emit(this.lastNumber);
    this.lastNumber++;
  },1000);
}

onPauseGame(){
  clearInterval(this.interval);
}

}
