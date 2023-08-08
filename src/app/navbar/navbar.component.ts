import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertifyServiceService } from '../services/alertify-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn? :boolean;
  constructor(private router:Router,private alertService:AlertifyServiceService) { }

  ngOnInit() {
  }
  isLoggedIn()
  {
    return localStorage.getItem('token');
  }
  loggedOut()
  { 
    localStorage.removeItem('token');
    this.alertService.error("User Loggedout Successfully");
    this.router.navigate(['user-login']);
  }

}
