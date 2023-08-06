import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-List-Property',
  templateUrl: './List-Property.component.html',
  styleUrls: ['./List-Property.component.css']
})
export class ListPropertyComponent implements OnInit {

  @ViewChild('Form') myFormData!:NgForm;
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

}
