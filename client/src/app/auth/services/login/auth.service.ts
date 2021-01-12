import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { TokenService } from '@shared/services/token/token.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = '/api/sign';

  constructor(
    private _http: TransferHttpService,
    private _tokenService: TokenService,
    private _localStorageService: LocalStorageService
  ) { }

  signUp(signUpDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/up`, signUpDTO)
    .pipe(
      tap(token => {
        this._localStorageService.setItem('auth-token', token);
        this._tokenService.setToken(token);
      })
    )
  }

  signIn(signInDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/in`, signInDTO)
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
