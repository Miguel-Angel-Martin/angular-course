import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataStorageService } from 'src/app/services/firebase/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  /*  @Output() featuredSelected = new EventEmitter<string>(); */

  /*  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  } */
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }
  isAuthenticated = false;
  ngOnInit(): void {
    this.userSub=this.authService.user.subscribe(user=>{
    this.isAuthenticated= !user? false : true; //== !!user
    console.log(!user);
    console.log(!!user)
    }); 
  }
  onSaveData() {
    this.dataStorageService.storeRecipe();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
