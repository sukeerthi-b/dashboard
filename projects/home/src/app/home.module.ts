import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
