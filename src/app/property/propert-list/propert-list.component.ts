
import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { ActivatedRoute } from '@angular/router';
import { Iproperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  constructor(private housingService:HousingServiceService,private route:ActivatedRoute) { }
  SellRent = 1;
  properties:Array<Iproperty>=[];
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
          console.log(data)
        },
        error =>(console.log(error))
      )
  }
  

  
    
}
