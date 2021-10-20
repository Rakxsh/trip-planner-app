import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-book-trips',
  templateUrl: './book-trips.component.html',
  styleUrls: ['./book-trips.component.css'],
})
export class BookTripsComponent implements OnInit {
  name!: string;
  phone!: string;

  date!: string;

  destination!: string;
  transportmode!: string;
  transporttype!: string;
  hotelName!: string;
  totalcost: number = 0;

  minDate: Date;
  maxDate: Date;
  tripForm: FormGroup;
  transporttypes: any = ['AC', 'NON-AC'];
  destinations: any = ['Chennai', 'Bengaluru', 'Mumbai'];
  transportmodes: any = ['Flights', 'Trains'];
  hotelnames: any = [
    'Hotel ELANZA (AC)',
    'Hotel PLANZA (AC)',
    'Hotel TANZA (AC)',
    'Hotel VINTAGE (NON-AC)',
  ];

  hotelCost: number = 0;
  transportCost: number = 0;

  constructor(private http: HttpClient) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    let name = new FormControl();

    let phone = new FormControl();
    let date = new FormControl();
    let destination = new FormControl();
    let transportmode = new FormControl();
    let transporttype = new FormControl();
    let hotelName = new FormControl();
    let totalcost = new FormControl();
    this.tripForm = new FormGroup({
      name: name,
      phone: phone,
      date: date,
      destination: destination,
      transportmode: transportmode,
      transporttype: transporttype,
      hotelName: hotelName,
      totalcost: totalcost,
    });
  }

  ngOnInit(): void {}

  setHotel() {
    this.hotelCost = 0;
    if (this.tripForm.get('hotelName')?.value == 'NONE') {
      this.hotelCost = this.hotelCost;
      console.log(this.hotelCost);
    }
    if (this.tripForm.get('hotelName')?.value == 'Hotel ELANZA (AC)') {
      this.hotelCost = this.hotelCost + 2000;
      console.log(this.hotelCost);
    }
    if (this.tripForm.get('hotelName')?.value == 'Hotel PLANZA (AC)') {
      this.hotelCost = this.hotelCost + 3000;
      console.log(this.hotelCost);
    }
    if (this.tripForm.get('hotelName')?.value == 'Hotel TANZA (AC)') {
      this.hotelCost = this.hotelCost + 4000;
      console.log(this.hotelCost);
    }
    if (this.tripForm.get('hotelName')?.value == 'Hotel VINTAGE (NON-AC)') {
      this.hotelCost = this.hotelCost + 1000;
      console.log(this.hotelCost);
    }
    console.log(this.tripForm.get('hotelName')?.value);
  }

  // Amount convertion
  setTransportModeAndCost() {
    this.transportCost = 0;

    if (
      this.tripForm.get('destination')?.value == 'Chennai' &&
      this.tripForm.get('transportmode')?.value == 'Flights'
    ) {
      this.transportCost = this.transportCost + 6000;
      console.log(this.transportCost);
    }
    if (
      this.tripForm.get('destination')?.value == 'Bengaluru' &&
      this.tripForm.get('transportmode')?.value == 'Flights'
    ) {
      this.transportCost = this.transportCost + 5000;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Mumbai' &&
      this.tripForm.get('transportmode')?.value == 'Flights'
    ) {
      this.transportCost = this.transportCost + 6000;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Mumbai' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'AC'
    ) {
      this.transportCost = this.transportCost + 4000;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Chennai' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'AC'
    ) {
      this.transportCost = this.transportCost + 1500;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Bengaluru' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'AC'
    ) {
      this.transportCost = this.transportCost + 1500;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Mumbai' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'NON-AC'
    ) {
      this.transportCost = this.transportCost + 2000;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Chennai' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'NON-AC'
    ) {
      this.transportCost = this.transportCost + 500;
      console.log(this.transportCost);
    }

    if (
      this.tripForm.get('destination')?.value == 'Bengaluru' &&
      this.tripForm.get('transportmode')?.value == 'Trains' &&
      this.tripForm.get('transporttype')?.value == 'NON-AC'
    ) {
      this.transportCost = this.transportCost + 500;
      console.log(this.transportCost);
    }

    console.log(
      this.tripForm.get('destination')?.value,
      this.tripForm.get('transportmode')?.value,
      this.tripForm.get('transporttype')?.value
    );
  }

  //total amount calculation
  totalAmount() {
    this.totalcost = this.hotelCost + this.transportCost;
  }

  //Register
  // register() {
  //   if (
  //     this.name==='' ||
  //     this.phone==='' ||
  //     this.date==='' ||
  //     this.destination==='' ||
  //     this.transportmode==='' ||
  //     this.transporttype==='' ||
  //     this.hotelName==='' ||
  //     this.totalcost===''
  //   ) {
  //     else if{

  //     }
  //   }
  // }

  //json-server
  bookTrips() {
    let url = 'http://localhost:3000/bookTrips';

    this.http
      .post(url, {
        name: this.name,
        phone: this.phone,
        date: this.date,
        destination: this.destination,
        transportmode: this.transportmode,
        transporttype: this.transporttype,
        hotelname: this.hotelName,
        totalcost: this.totalcost,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
        console.log(JSON.stringify(data.json.name));
        console.log(JSON.stringify(data.json.phone));
        console.log(JSON.stringify(data.json.date));
        console.log(JSON.stringify(data.json.destination));
        console.log(JSON.stringify(data.json.transportmode));
        console.log(JSON.stringify(data.json.transporttype));
        console.log(JSON.stringify(data.json.hotelname));
        console.log(JSON.stringify(data.json.totalcost));
      });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      console.log('Form Submitted!');
      this.tripForm.reset();
    }
  }
}
