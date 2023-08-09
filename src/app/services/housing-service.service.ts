import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

import { Observable } from 'rxjs';
import { Iproperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number) : Observable<Iproperty[]>
  {
    return this.http.get<Iproperty[]>('assets/properties.json').pipe(
      map((data: Iproperty[]) => 
      {
        const properties: Iproperty[] = data.filter(item => item.SellRent == SellRent);
        return properties;
      })
    );
  }
}
