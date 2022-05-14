import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Service/core/authentication/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./Components/register/register.module').then(m => m.RegisterModule) },
{ path: 'sidebar', loadChildren: () => import('./Nav/sidebar/sidebar.module').then(m => m.SidebarModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
