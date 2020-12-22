import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { MetaGuard } from '@ngx-meta/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SelectUserComponent } from './components/select-use/select-user.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration/:type',
    component: RegistrationComponent
  },
  {
    path: 'select-user',
    component: SelectUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
