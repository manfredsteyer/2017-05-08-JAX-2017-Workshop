
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { BASE_URL } from '../app.tokens';

@Injectable()
export class FlightService {

  constructor(
      private http: Http,
      @Inject(BASE_URL) private baseUrl: string
    ) {
    console.debug('Viele Grüße aus dem Ctor!');
  }

  find(from: string, to: string): Observable<Flight[]> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers()
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    return this
            .http
            .get(url, { headers, search })
            .map(r => r.json());

  }

  findById(id: string): Observable<Flight> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers()
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('id', id);

    return this
      .http
      .get(url, { headers, search })
      .map(r => r.json());

  }


  save(flight: Flight): Observable<Flight> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers()
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, flight, { headers })
      .map(r => r.json());

  }


}
