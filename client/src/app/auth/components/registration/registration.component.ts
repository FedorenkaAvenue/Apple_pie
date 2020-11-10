import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  button: string = 'buttons.registration';
  private _prefix: string = 'auth.registration.form.';
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }
}
