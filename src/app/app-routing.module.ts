import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {WebcomComponent} from './webcom/webcom.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'register', component:RegistrationComponent},
  {path:'webcam',component:WebcomComponent}

  // Add other routes for your application here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
