import { Component, OnInit, HostBinding } from '@angular/core';




@Component({
  selector: 'app-tracker-overlay',
  templateUrl: './tracker-overlay.component.html',
  styleUrls: ['./tracker-overlay.component.scss']
})
export class TrackerOverlayComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit() {

    
  }
  
  timerStarted = false;
  isOpen = false;


  toggle() {
    this.timerStarted = !this.timerStarted;
    this.isOpen = !this.isOpen;
  }





}


