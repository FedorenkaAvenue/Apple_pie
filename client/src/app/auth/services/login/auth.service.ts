import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = '/api/auth';

  constructor(
    private _http: TransferHttpService
  ) { }

  signUp(signUpDTO: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signup`, signUpDTO);
  }
}
