import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedTripsComponent } from './view-booked-trips.component';

describe('ViewBookedTripsComponent', () => {
  let component: ViewBookedTripsComponent;
  let fixture: ComponentFixture<ViewBookedTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookedTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
