import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OlIntegrationModule } from 'ol-integration';

// import { MapComponent } from '../../projects/ol-integration/src/lib/map/map.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OlIntegrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
