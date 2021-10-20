import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trips } from '../view-booked-trips/view-booked-trips.component';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/bookTrips';

  getTrips(): Observable<any> {
    return this.http.get<Trips[]>(this.url);
  }

  getselecteddestination(selecteddestination: any): Observable<any> {
    let param1 = new HttpParams().set('destination', selecteddestination);
    return this.http.get<Trips[]>(this.url, { params: param1 });
  }
}
