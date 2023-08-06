import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-propert-card',
  templateUrl: 'propert-card.component.html',
  styleUrls: ['propert-card.component.css']
})
export class PropertCardComponent implements OnInit 
{
  @Input() property!: IProperty;
  constructor(private route: Router) { }

  ngOnInit() {
    
  }

}
