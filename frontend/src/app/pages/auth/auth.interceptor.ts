import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

//import { SERVER_API_URL } from 'app/app.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    SERVER_API_URL = '';

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (!request || !request.url || (request.url.startsWith('http') && !(this.SERVER_API_URL && request.url.startsWith(this.SERVER_API_URL)))) {
        //     return next.handle(request);
        // }


        const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
        console.log('AuthInterceptor: ', token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    }
}
