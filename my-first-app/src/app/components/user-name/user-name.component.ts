import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  userName: string = 'User Name';
  userNameStatus: boolean = false;

  resetUserName() {
    this.userName = '';
    this.userNameStatus = true;
  }
  onUpdateUserName(event: any) {
    if (this.userName!== ''){
      this.userNameStatus= false;
    }
    /* console.log(this.userName);
    return (event.target as HTMLInputElement).value; */
  }


}
