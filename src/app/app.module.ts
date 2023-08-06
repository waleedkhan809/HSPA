import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { PropertCardComponent } from './property/propert-card/propert-card.component';
import    {HttpClientModule}   from '@angular/common/http'
import { HousingServiceService } from './services/housing-service.service';
import {Route,RouterModule, Routes} from '@angular/router'
import { BuyPropertyComponent } from './property/Buy-Property/Buy-Property.component';
import { SellPropertyComponent } from './property/Sell-Property/Sell-Property.component';
import { ListPropertyComponent } from './property/List-Property/List-Property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes : Routes = [
  {path:'',component:PropertListComponent},
  {path:'buy-property',component:BuyPropertyComponent},
  {path:'sell-property',component:SellPropertyComponent},
  {path:'list-property',component:ListPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent,
      PropertListComponent,
      PropertCardComponent,
      BuyPropertyComponent,
      SellPropertyComponent,
      ListPropertyComponent,
      PropertyDetailComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    HousingServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
