import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authPrefix: string;

  constructor() {
    this.authPrefix =
      /** condition is:
       * If we have some specific auth prefix we use it,
       * Else we use default JWT (json web token) prefix - 'Bearer' */
      environment && environment['AUTH_KEY']
        ? environment['AUTH_KEY']
        : 'Bearer';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}
