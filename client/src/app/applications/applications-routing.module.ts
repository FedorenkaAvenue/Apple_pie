import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { NewApllicationsComponent } from './components/new-apllications/new-apllications.component';


const routes: Routes = [
  {
    path: '',
    component: ApplicationsListComponent
  },
  {
    path: 'new',
    component: NewApllicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
