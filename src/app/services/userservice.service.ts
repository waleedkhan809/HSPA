import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

constructor() { }

addUser(user:User,users:any[])
  {
    const storedData = localStorage.getItem('users');

    if (storedData !== null && storedData !== undefined) 
    {
      users = JSON.parse(storedData );
      //this.users.push(user)
      users = [user,...users];
    } 
    else 
    {
      // Handle the case where there's no stored data
      users = [user]
    }
    localStorage.setItem('users',JSON.stringify(users));

  }

}
