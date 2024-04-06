import {  HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {  tap } from 'rxjs';

export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler ){
    console.log('Request is on its way');
    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    })
    return next.handle(modifiedReq);
    /* .pipe(
      tap(event => {
        if(event.type === HttpEventType.Response){
          console.log('Response of the body');
          console.log(event.body);
        }
        console.log(event);
      })
    ) */;
  }
};
