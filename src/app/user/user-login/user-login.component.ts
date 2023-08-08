import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:any;
  authenticUser:any;
  constructor(private authService:AuthServiceService,private alertService:AlertifyServiceService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm)
  {
    this.user = loginForm.value;
    console.log(this.user)
    if(this.user)
    {
      this.authenticUser = this.authService.authLogin(this.user);
      if(this.authenticUser)
      {
        localStorage.setItem('token',this.authenticUser.username);
        console.log(localStorage.getItem('token'));
        this.alertService.success("User Loggedin Successffully");
        this.router.navigate(['/']);
        console.log("User Logged in")
      }
      else
      {
        this.alertService.error("Username or Password is incorrect");
      }
    
      
    }
  }

}
