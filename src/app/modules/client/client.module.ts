import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [ClientRoutingModule.components],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
