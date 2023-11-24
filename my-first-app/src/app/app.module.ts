import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';


import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { DirectivePageComponent } from './components/directive-page/directive-page.component';




@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerStatusComponent,
    ServersComponent,
    UserNameComponent,
    DirectivePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
