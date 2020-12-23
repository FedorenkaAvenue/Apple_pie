import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private currentUserSubject = new BehaviorSubject<string>('')
  public currentUser$ = this.currentUserSubject.asObservable();

  private _token: string

  get token() {
    return this._token
  }

  set token(token) {
    this._token = token
    this.currentUserSubject.next(token)
  }

  constructor(
    private readonly _localstorageService: LocalStorageService
  ) { 
    this.initState()
  }

  initState() {
    this.setValuesFromLocalStolage()
  }

  setValuesFromLocalStolage() {
    this.token = this._localstorageService.getItem('auth-token');
  }
}
