import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutes } from './registration.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutes,
    TranslateModule
  ]
})
export class RegistrationModule { }
