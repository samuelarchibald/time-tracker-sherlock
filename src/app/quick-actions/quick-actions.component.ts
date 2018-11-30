import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TrackerOverlayComponent } from '../tracker-overlay/tracker-overlay.component';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {

  @Input() TrackerOverlay : TrackerOverlayComponent;

  
  startTimer() {
    this.TrackerOverlay.toggle();
  }


  constructor() { }

  ngOnInit() {
  }

}


