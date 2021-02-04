import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "about-us",
        component: AboutUsComponent
      },
      {
        path: "contact-us",
        component: ContactUsComponent
      },
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "post/:id",
        component: PostDetailComponent
      },
     
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
