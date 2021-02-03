import { Routes } from "@angular/router";
import { NotFound404Component } from "../components/not-found404/not-found404.component";

export const ALL_ROUTES: Routes = [
  { path: "", loadChildren: () => import('../../home/home.module').then(m => m.HomeModule) },
  
];