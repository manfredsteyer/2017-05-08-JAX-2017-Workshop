import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { CustomErrorHandler } from './shared/error/custom-error-handler';
import { BASE_URL } from './app.tokens';
import { FlightCardComponent } from './flight-search/flight-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
