import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing request is on its way');
        console.log(req.url);
        console.log(req.headers);
        return next.handle(req).pipe(
            tap(event => {
                if(event.type === HttpEventType.Response){
                    console.log('Incoming response of the body');
                    console.log(event.body);
                }
                console.log(event);
            })
        );
    }
}