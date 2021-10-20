import { Component, OnInit, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../services/rest.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Guid } from 'guid-typescript';
export interface Trips {
  id: Guid;
  name: string;
  phone: string;
  date: string;
  destination: string;
  transportmode: string;
  transporttype: string;
  hotelname: string;
  totalcost: number;
}

@Component({
  selector: 'app-view-booked-trips',
  templateUrl: './view-booked-trips.component.html',
  styleUrls: ['./view-booked-trips.component.css'],
})
export class ViewBookedTripsComponent implements OnInit {
  @Input('ELEMENT_DATA')
  ELEMENT_DATA!: Trips[];
  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'date',
    'destination',
    'transportmode',
    'transporttype',
    'hotelname',
    'totalcost',
  ];

  dataSource = new MatTableDataSource<Trips>(this.ELEMENT_DATA);

  trips: Array<any> = [];
  filterdestinationForm: FormGroup;
  destinations: any = ['All', 'Chennai', 'Bengaluru', 'Mumbai'];
  destination: any = 'All';
  id: Guid;

  constructor(private service: RestService) {
    this.id = Guid.create();
    let destination = new FormControl();
    this.filterdestinationForm = new FormGroup({
      destination: destination,
    });
  }

  ngOnInit(): void {
    let resp = this.service.getTrips();
    resp.subscribe(
      (report: Trips[]) => (this.dataSource.data = report as Trips[])
    );
    console.log(this.destination);
    this.getAllTrips();
  }

  public getAllTrips() {
    if (this.filterdestinationForm.get('destination')?.value == 'All') {
      this.destination = 'All';
      let resp = this.service.getTrips();
      resp.subscribe(
        (report: Trips[]) => (this.dataSource.data = report as Trips[])
      );
      console.log(this.destination);
    }

    if (this.filterdestinationForm.get('destination')?.value == 'Chennai') {
      this.destination = 'Chennai';
      let resp = this.service.getselecteddestination(this.destination);
      resp.subscribe(
        (report: Trips[]) => (this.dataSource.data = report as Trips[])
      );
      console.log(this.destination);
    }

    if (this.filterdestinationForm.get('destination')?.value == 'Bengaluru') {
      this.destination = 'Bengaluru';
      let resp = this.service.getselecteddestination(this.destination);
      resp.subscribe(
        (report: Trips[]) => (this.dataSource.data = report as Trips[])
      );
      console.log(this.destination);
    }

    if (this.filterdestinationForm.get('destination')?.value == 'Mumbai') {
      let resp = this.service.getselecteddestination(this.destination);
      resp.subscribe(
        (report: Trips[]) => (this.dataSource.data = report as Trips[])
      );
      console.log(this.destination);
    }
    console.log(this.filterdestinationForm.get('destination')?.value);
  }

  onSelecteddestination(selecteddestination: any): void {
    this.service.getselecteddestination(selecteddestination).subscribe;
    {
      (data: any) => {
        this.destination = data;
      };
    }
  }
}
