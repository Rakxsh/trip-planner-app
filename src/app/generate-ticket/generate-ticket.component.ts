import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css'],
})
export class GenerateTicketComponent implements OnInit {
  uuidValue!: string;
  constructor() {}
  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }
  ngOnInit(): void {}
}
