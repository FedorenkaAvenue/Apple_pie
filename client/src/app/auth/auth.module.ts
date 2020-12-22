import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LayoutsModule } from '@shared/layouts/layouts.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SelectUserComponent } from './components/select-use/select-user.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    SelectUserComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  providers: [
    FormBuilder
  ]
})
export class AuthModule {
}
