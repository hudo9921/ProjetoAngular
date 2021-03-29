import { UserDetailsComponent } from './user-details/user-details.component';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'listaUsers', component:ListaUsersComponent},
  {path:'userDetails/:id',component:UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
