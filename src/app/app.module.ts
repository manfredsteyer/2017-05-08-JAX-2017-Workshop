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
import { AppRoutesModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent,
    HomeComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'},
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
