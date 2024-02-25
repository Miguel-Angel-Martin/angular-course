import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveService {

  constructor() { }

  withoutSaveGuard(allowEdit: boolean, serverName: string, formServerName: string, serverStatus: string, formSeverStatus: string, changesSaved: boolean) {
    if (!allowEdit) {
      return true;
    }
    if ((serverName !== formServerName || serverStatus !== formSeverStatus) && !changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }

  }

}
