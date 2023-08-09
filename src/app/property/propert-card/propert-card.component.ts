import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Iproperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-propert-card',
  templateUrl: 'propert-card.component.html',
  styleUrls: ['propert-card.component.css']
})
export class PropertCardComponent implements OnInit 
{
  @Input() property?: Iproperty;
  @Input() displayButt?: boolean;
  constructor(private route: Router) { }

  ngOnInit() {
    
  }

}
