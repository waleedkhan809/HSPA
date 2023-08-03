import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { PropertCardComponent } from './property/propert-card/propert-card.component';

@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent,
      PropertListComponent,
      PropertCardComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
