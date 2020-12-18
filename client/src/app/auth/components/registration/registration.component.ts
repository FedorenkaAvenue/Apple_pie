import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserType } from '@shared/enums/user.enum';
import { AuthService } from 'app/auth/services/login/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public button: string = 'buttons.registration';
  public form: FormGroup;
  public userRole: UserType;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.userRole = +this._route.snapshot.paramMap.get('type');
    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      name: this._fb.control(null, [Validators.required]),
      password: this._fb.control(null, [Validators.required]),
      email: this._fb.control(null, [Validators.required]),
    });
  }

  public onSubmit(): void {
    this._authService.signUp({...this.form.value, role: this.userRole}).subscribe(el => {
      console.log(el);
      alert('ok')
    });
  }
}
