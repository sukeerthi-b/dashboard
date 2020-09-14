import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StreamRoutingModule } from './stream-routing.module';
import { StreamComponent } from './stream.component';

@NgModule({
  declarations: [
    StreamComponent
  ],
  imports: [
    BrowserModule,
    StreamRoutingModule
  ],
  providers: [],
  bootstrap: [StreamComponent]
})
export class StreamModule { }
