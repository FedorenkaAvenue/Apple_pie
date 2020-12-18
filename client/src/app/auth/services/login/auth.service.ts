import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = '/api/sign';

  constructor(
    private _http: TransferHttpService
  ) { }

  signUp(signUpDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signup`, signUpDTO);
  }

  signIn(signInDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signin`, signInDTO)
    .pipe(
      tap(token => this.doLoginUser(token)),
      catchError(error => {
        alert(error.error);
        return of(false)
      })
    )
  }

  doLoginUser(token) {
    console.log(token)
  }
}
