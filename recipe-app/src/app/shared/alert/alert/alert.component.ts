import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  @Input() message: string; // Error message to display
  @Output() close = new EventEmitter<void>();
  ngOnInit(): void {
    if (this.message) {
      const modal = new bootstrap.Modal(document.getElementById('staticBackdrop')!);
      modal.show();
    }
  }
  onClose() {
    this.close.emit();
  }

}
