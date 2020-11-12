import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth/services/login/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public button: string = 'buttons.registration';
  public form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
    ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      name: this._fb.control(null, [Validators.required]),
      password: this._fb.control(null, [Validators.required]),
      email: this._fb.control(null, [Validators.required]),
      role: this._fb.control(null, [Validators.required]),
    });
  }

  public onSubmit(): void {
    this._authService.signUp(this.form.value).subscribe(el => {
      console.log(el);
    })
  }
}
