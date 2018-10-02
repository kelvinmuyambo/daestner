import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MultinavComponent } from './components/multinav/multinav.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesDetailsComponent } from './components/services-details/services-details.component';
import { ProductsComponent } from './components/products/products.component';
import { CommunityComponent } from './components/community/community.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultinavComponent,
    IndustriesComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProductsComponent,
    CommunityComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'industries', component: IndustriesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'about', component: AboutComponent }     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
