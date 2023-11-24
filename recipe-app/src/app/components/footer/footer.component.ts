import { Component } from '@angular/core';

import { faHome, faGem, faEnvelope, faPhone, faPrint, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faHome = faHome;
  faGem = faGem;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;
  faPhoneAlt = faPhoneAlt;
}
