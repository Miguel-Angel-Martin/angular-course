import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from 'src/app/services/firebase/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /*  @Output() featuredSelected = new EventEmitter<string>(); */

  /*  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  } */
  constructor(private dataStorageService: DataStorageService) { }
  onSaveData() {
    this.dataStorageService.storeRecipe();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
