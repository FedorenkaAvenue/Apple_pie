import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'app/auth/services/refresh/refresh.service';

declare const gapi
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private gapiSetup = false;
  private authInstance;
  private user;
  private error;
  constructor(
    private readonly _refreshService: RefreshService
  ) { }

  ngOnInit(): void {
  }

  getRefresh() {
    this._refreshService.refresh().subscribe(
      el => console.log(el)
    )
  }

  public googleAuth() {

  }
  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
      console.log('auth');
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '535551783086-ptn15am3ih5s790gq3fhiqd7ij2eg1nk.apps.googleusercontent.com' })
        .then(auth => {
          console.log(auth);
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<any> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }
}
