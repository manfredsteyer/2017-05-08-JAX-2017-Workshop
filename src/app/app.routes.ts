import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);

