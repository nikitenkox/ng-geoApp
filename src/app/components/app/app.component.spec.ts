import { AppComponent }                           from './app.component';
import { CountriesComponent }                     from '../countries/countries.component';
import { CountryComponent }                       from '../country/country.component';
import { CitiesComponent }                        from '../cities/cities.component';
import { CityComponent }                          from '../city/city.component';
import { CityForm }                               from '../city-form/cities-form.component';
import { HeaderComponent }                        from '../header/header.component';

import { HttpModule }                             from '@angular/http';
import { ReactiveFormsModule }                    from '@angular/forms';

import { GeoService }                             from '../../services/geo.service';

import { async, ComponentFixture, TestBed }       from '@angular/core/testing';
import { By }                                     from '@angular/platform-browser';
import { DebugElement }                           from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent, 
        CountriesComponent,
        CountryComponent,
        CitiesComponent,
        CityComponent,
        CityForm
      ],
      providers: [ GeoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
