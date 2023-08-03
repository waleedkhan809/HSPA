import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  properties:any[]=
  [
    {
      "Id":1,
      "Name":'Khan House',
      "Type":'House',
      "Price":1200
    },
    {
      "Id":2,
      "Name":'Tareen House',
      "Type":'House',
      "Price":1500
    }, {
      "Id":3,
      "Name":'Wahab House',
      "Type":'House',
      "Price":1100
    },
    {
      "Id":4,
      "Name":'Waleed House',
      "Type":'House',
      "Price":1300
    },
    {
      "Id":5,
      "Name":'Mohsin House',
      "Type":'House',
      "Price":1600
    },
    {
      "Id":6,
      "Name":'Mian House',
      "Type":'House',
      "Price":1000
    }
  ]
}
