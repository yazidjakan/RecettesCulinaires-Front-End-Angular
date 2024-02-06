import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(localStorage.getItem('token')) 
        const token = localStorage.getItem('token');
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                }
            });
        }
        return next.handle(request);
    }
}
