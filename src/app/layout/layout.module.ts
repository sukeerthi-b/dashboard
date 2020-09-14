import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
