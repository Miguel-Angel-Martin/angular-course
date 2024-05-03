import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/firebase/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.autoLogin();
    console.log('app component');
  }
  /**
   * Changed with subject
   */
 /*
  loadedFeature = 'recipe';  
 onNavigate(feature: string){
    this.loadedFeature = feature;
  } */
}
