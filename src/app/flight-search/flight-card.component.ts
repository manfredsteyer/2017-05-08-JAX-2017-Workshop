import { Component, Input, EventEmitter, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

  constructor() {
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit(): void {
    console.debug('init', this.item, this.selected);

    // Löst Fehler aus:
    //this.selectedChange.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      console.debug('\titem');
    }
    if (changes['selected']) {
      console.debug('\tselected');
    }

    console.debug('changes', this.item, this.selected);
  }

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

  toggle() {
    console.debug('toggle');
    this.selected = !this.selected;
    this.selectedChange.next(this.selected);
  }
}
