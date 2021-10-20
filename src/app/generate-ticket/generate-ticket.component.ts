import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css'],
})
export class GenerateTicketComponent implements OnInit {
  uuidValue!: string;
  disabled = false;
  Trips: [] = [];
  constructor(private service: RestService) {}
  generateUUID(tId: HTMLInputElement) {
    if (parseInt(tId.value) <= this.Trips.length) {
      this.disabled = true;
      this.uuidValue = UUID.UUID();
      return this.uuidValue;
    }
    return this.uuidValue;
  }
  ngOnInit(): void {
    let resp = this.service.getTrips();
    resp.subscribe((data) => (this.Trips = data));
  }
}
