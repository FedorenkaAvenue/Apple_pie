import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '@shared/services/state/state.service';
import { AuthService } from 'app/auth/services/login/auth.service';
import { Observable } from 'rxjs';

const links = [
  {
    title: 'link 1',
    path: '/'
  },
  {
    title: 'link 2',
    path: '/'
  },
  {
    title: 'applications',
    path: '/applications'
  },
  {
    title: 'link 4',
    path: '/'
  },
  {
    title: 'link 5',
    path: '/'
  },
]
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(
    private readonly _authService: AuthService,
    private readonly _stateService: StateService,
    private readonly _router: Router
  ) {}

  public links = links;
  public userToken: Observable<string>;
  ngOnInit(): void {
    this.userToken = this._stateService.currentUser$
  }

  public logOut(): void {
    this._authService.logOut().subscribe(el => {
      console.log(el);
    })
  }

  public logIn(): void {
    this._router.navigate(['/auth'])
  }
}