import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertifyServiceService } from '../services/alertify-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedInUserName?:string;
  userLoggedIn? :boolean;
  constructor(private router:Router,private alertService:AlertifyServiceService) { }

  ngOnInit() {
  }
  isLoggedIn()
  { 
    if(localStorage.getItem('token')!==null)
    {
      return this.loggedInUserName = localStorage.getItem('token') as string;
    }
    return;
  }
  loggedOut()
  { 
    localStorage.removeItem('token');
    this.alertService.error("User Logged out Successfully");
    this.router.navigate(['user-login']);
  }

}
