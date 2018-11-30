import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fullName:string = "Samuel Clark";
  totalHoursPayPeriod:number = 42;
  daysUntilPayday:number = 3;
  
  constructor() { }

  ngOnInit() {
  }

}
