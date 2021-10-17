import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-trips',
  templateUrl: './book-trips.component.html',
  styleUrls: ['./book-trips.component.css']
})
export class BookTripsComponent implements OnInit {

minDate: Date;
  maxDate: Date;

  transporttypes: any = ['AC', 'NON-AC'];
 Locations: any = ['Chennai', 'Bengaluru', 'Mumbai'];
 Modes: any = ['Flights', 'Trains'];
 hotels: any = ['YES', ' No'];
 hoteltypes : any = ['AC', 'NON-AC'];
cost: number=0;

 setcost(mode: HTMLInputElement, type: HTMLInputElement){

if(mode.value==="Flights" && type.value==="AC"){
  this.cost = 5000;
}
else if(mode.value==="Flights" && type.value==="NON-AC"){
this.cost = 3000;
} 
else if(mode.value==="Trains" && type.value==="AC"){
this.cost = 3000;
} 
else if(mode.value==="Trains" && type.value==="NON-AC"){
this.cost = 1000;
} 

 }
 
  constructor() { 
     const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }

}