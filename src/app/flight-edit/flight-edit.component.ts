
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../entities/flight';
import { FlightService } from '../flight-search/flight.service';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) {
  }

  id: string;
  showDetails: string;
  flight: Flight;
  message: string;

  load(id: string): void {
    this
      .flightService
      .findById(id)
      .subscribe(
        flight => {
          this.flight = flight;
        },
        err => {
          console.error('fehler beim laden', err);
        }
      );
  }

  save() {
    this
      .flightService
      .save(this.flight)
      .subscribe(
        flight => {
          this.flight = flight;
          this.message = 'Erfolgreich gespeichert!';
        },
        err => {
          console.debug('Fehler beim Speichern', err);
          this.message = 'Fehler: ' + err.text();
        }
      );
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.load(this.id);
      this.showDetails = p['showDetails'];
    });
  }

}
