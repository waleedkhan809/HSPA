import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }

authLogin(user:any) :any
{
  let users:any[] = [];
  let loadUsers = localStorage.getItem('users');
  if(loadUsers!==null && loadUsers!==undefined)
  {
    users = JSON.parse(loadUsers);
  }
  return users.find(p => p.username === user.name && p.password === user.password);
 
}

}
