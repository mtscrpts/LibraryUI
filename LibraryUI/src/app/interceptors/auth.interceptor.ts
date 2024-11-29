import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log(request);
        if (!this.auth.check()) return next.handle(request);

        const authToken = this.auth.token();
        const authRequest = request.clone({
            setHeaders: { Authorization: authToken },
        });

        return next.handle(authRequest);
    }
}
