import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerOverlayComponent } from './tracker-overlay.component';

describe('TrackerOverlayComponent', () => {
  let component: TrackerOverlayComponent;
  let fixture: ComponentFixture<TrackerOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
