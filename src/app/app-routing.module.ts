import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './core/components/not-found404/not-found404.component';
import { DashboardLayoutComponent } from './core/layouts/dashboard-layout/dashboard-layout.component';
import { ALL_ROUTES } from './core/routes/all-routes';

const routes: Routes = [
  { path: "", component: DashboardLayoutComponent, children: ALL_ROUTES },
 
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
