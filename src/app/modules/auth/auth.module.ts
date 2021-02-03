import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AuthRoutingModule.components, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  
})
export class AuthModule { }
