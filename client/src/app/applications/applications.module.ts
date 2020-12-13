import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { NewApllicationsComponent } from './components/new-apllications/new-apllications.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';


@NgModule({
  declarations: [ApplicationsListComponent, NewApllicationsComponent, ApplicationFormComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
