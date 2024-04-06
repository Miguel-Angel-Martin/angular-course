import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { LoggingInterceptor } from './interceptors/loggin.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:authInterceptor, 
    multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass:LoggingInterceptor, 
      multi: true}],
    //oder is important
  bootstrap: [AppComponent]
})
export class AppModule {}
