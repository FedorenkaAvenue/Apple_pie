import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth/services/login/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
    ) {
  }

  ngOnInit() {
    this.initForm();
   }

  initForm() {
    this.form = this._fb.group({
      email: this._fb.control(null, [Validators.required]),
      password: this._fb.control(null, [Validators.required]),
    })
  }
  public onSubmit(): void {
    this._authService.signIn(this.form.value).subscribe(el => {
      console.log(el);
    });
  }
}
