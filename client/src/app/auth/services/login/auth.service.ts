import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { StateService } from '@shared/services/state/state.service';
import { TokenService } from '@shared/services/token/token.service';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = '/api/sign';

  constructor(
    private _http: TransferHttpService,
    private _tokenService: TokenService,
    private _localStorageService: LocalStorageService,
    private _stateService: StateService
  ) { }

 public signUp(signUpDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signup`, signUpDTO)
    .pipe(
      tap((token: string) => this.doLoginUser(token)),
      catchError(error => {
        alert(error.error);
        return of(false)
      })
    )
  }

public signIn(signInDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signin`, signInDTO)
    .pipe(
      tap((token: string) => this.doLoginUser(token)),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false)
      })
      )
    }
    
    public logOut(): Observable<boolean> {
      console.log(32);
      return this._http.get(`${this.apiUrl}/signout`)
      .pipe(
        tap((res) => this.doLogOut()),
        mapTo(true),
        catchError(error => {
          alert('aaaaa');
          return of(false)
        })
      )
    }
    public isAuthorized(): boolean {
    return !!this._tokenService.getToken()
  }

  private doLoginUser(token: string) {
    this._localStorageService.setItem('auth-token', token);
    this._stateService.token = token;
  }

  private doLogOut() {
    console.log('do-logout')
    this._localStorageService.removeItem('auth-token')
    this._stateService.token = null;
  }
}
