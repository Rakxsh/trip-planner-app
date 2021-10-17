import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTripsComponent } from './book-trips.component';

describe('BookTripsComponent', () => {
  let component: BookTripsComponent;
  let fixture: ComponentFixture<BookTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
