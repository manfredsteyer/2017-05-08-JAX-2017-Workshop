/*
{ provide: FlightService,
  useFactory: (http: Http, baseUrl: string) => {
  console.debug('liebesgrüße aus der Factory!');
  return new FlightService(http, baseUrl);
  if (environment.production) {
    return new FlightService(http, baseUrl);
  }
  else {
    return {
      find() { }
    }
  }
},
  deps: [Http, BASE_URL]
}
*/

import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';
import { environment } from '../../environments/environment.prod';
import { BASE_URL } from '../app.tokens';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
})
export class FlightSearchComponent {

  from: string;
  to: string;

  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };

  // private http: Http;
  constructor(private flightService: FlightService) {
    console.debug('Viele Grüße aus dem Ctor!');
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  search(): void {

    this
      .flightService
      .find(this.from, this.to)
      .subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('error', errResp);

        }
      );

  }

  ngOnDestroy() {
    // Aufräumen

  }
}
