import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-List-Property',
  templateUrl: './List-Property.component.html',
  styleUrls: ['./List-Property.component.css']
})
export class ListPropertyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() 
  {
   
  }
  onBack()
  {
    this.router.navigate(['/']);
  }

}
