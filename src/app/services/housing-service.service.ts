import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number) : Observable<IProperty[]>
  {
    return this.http.get<IProperty[]>('assets/properties.json').pipe(
      map((data: IProperty[]) => 
      {
        const properties: IProperty[] = data.filter(item => item.SellRent == SellRent);
        return properties;
      })
    );
  }
}
