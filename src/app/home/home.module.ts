import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { PaginationComponent } from './components/right/pagination/pagination.component';
import { WidgetComponent } from './components/right/widget/widget.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: 
  [
    HomeLayoutComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    TestimonialComponent, 
    HomePageComponent, 
    SliderComponent, 
    PaginationComponent, 
    WidgetComponent, 
    PostsComponent, 
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
