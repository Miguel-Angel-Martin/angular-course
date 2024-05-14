import { Component, Input, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() message: string; // Error message to display
  ngOnInit(): void {
    if (this.message) {
      const modal = new bootstrap.Modal(document.getElementById('staticBackdrop')!);
      modal.show();
    }
  }
}
