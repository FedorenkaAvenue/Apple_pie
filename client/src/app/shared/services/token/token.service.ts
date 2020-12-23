import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = null;

  constructor() { }

  setToken(token: any): void {
    this._token = token
  }

  getToken(): any {
    return this._token;
  }

  
}
