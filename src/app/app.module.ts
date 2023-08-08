import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
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
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserserviceService } from './services/userservice.service';
import { AlertifyServiceService } from './services/alertify-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const appRoutes : Routes = [
  {path:'',component:PropertListComponent},
  {path:'buy-property',component:PropertListComponent},
  {path:'sell-property',component:PropertListComponent},
  {path:'list-property',component:ListPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-register',component:UserRegisterComponent}
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
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    HousingServiceService,
    UserserviceService,
    AlertifyServiceService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
