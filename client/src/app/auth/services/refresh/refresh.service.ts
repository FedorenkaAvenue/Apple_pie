import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private apiUrl = 'api'

  constructor(private readonly _http: TransferHttpService) { }

  public refresh(): Observable<string> {
    return this._http.get(`${this.apiUrl}/auth/refresh`)
  }
}

