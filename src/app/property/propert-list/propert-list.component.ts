
import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  constructor(private housingService:HousingServiceService,private route:ActivatedRoute) { }
  SellRent = 1;
  properties:Array<IProperty>=[];
  ngOnInit() : void 
  {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe
      (
        data=> 
        {
          this.properties = data;
          console.log(data),
          
        },
        error =>(console.log(error))
      )
  }
  

  
    
}
