import { Component, HostListener, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-List-Property',
  templateUrl: './List-Property.component.html',
  styleUrls: ['./List-Property.component.css']
})
export class ListPropertyComponent implements OnInit 
{
  properties:Array<string> = ['House','Apartment','Duplex'];
  furnishTypes:Array<string> = ['Fully','Semi','UnFurnished']
  @ViewChild('dp') datepicker?: BsDatepickerDirective;
  @ViewChild('Form') myFormData!:NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  propertyView: Iproperty = {
    Id:null,
    Name:'',
    FType:'',
    PType:'',
    BHK:null,
    BuiltArea:null,
    City:'',
    RTM:null,
    SellRent:null,
    Price:null,
    Image:'',
    Description:''
  }
  constructor(private router:Router) { }

  ngOnInit() 
  {
   
  }
  onBack()
  {
    this.router.navigate(['/']);
  }
  onSubmit()
  {
    console.log("Congrats From is submitted")
    console.log(this.myFormData)
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
}
