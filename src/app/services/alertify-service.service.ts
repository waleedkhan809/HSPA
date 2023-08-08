import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs'
@Injectable({
  providedIn: 'root'
})
export class AlertifyServiceService {

constructor() { }

success (message:string)
{
  alertifyjs.success(message)
}
error (message:string)
{
  alertifyjs.error(message)
}

}
