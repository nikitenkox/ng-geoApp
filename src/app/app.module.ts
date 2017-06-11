import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { HttpModule }                             from '@angular/http';
import { ReactiveFormsModule }                    from '@angular/forms';

import { GeoService }                             from './services/geo.service';

import { AppComponent }                           from './components/app/app.component';
import { HeaderComponent }                        from './components/header/header.component';
import { CountriesComponent }                     from './components/countries/countries.component';
import { CitiesComponent }                        from './components/cities/cities.component';
import { CityForm }                               from './components/city-form/cities-form.component';
import { CityComponent }                          from './components/city/city.component';
import { CountryComponent }                       from './components/country/country.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    CitiesComponent,
    CityForm,
    CityComponent,
    CountryComponent
    ],
  providers: [
    GeoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
