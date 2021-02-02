import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { ScollToTopComponent } from './components/scoll-to-top/scoll-to-top.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { BaseService } from './services/base.service';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { UtilityService } from './utilities/utility.service';


@NgModule({
  declarations: 
  [
    DashboardLayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    NotFound404Component, 
    ScollToTopComponent
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [BaseService, UtilityService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
