import { CitiesComponent }                        from '../cities/cities.component';
import { CountriesComponent }                     from '../countries/countries.component';
import { CountryComponent }                       from '../country/country.component';
import { CityComponent }                          from '../city/city.component';
import { CityForm }                               from '../city-form/cities-form.component';
import { HeaderComponent }                        from '../header/header.component';

import { HttpModule }                             from '@angular/http';
import { ReactiveFormsModule }                    from '@angular/forms';

import { GeoService }                             from '../../services/geo.service';

import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick
}                                                 from '@angular/core/testing';
import { By }                                     from '@angular/platform-browser';
import { DebugElement }                           from '@angular/core';

describe('CitiesComponent', function () {
  let de: DebugElement;
  let comp: CitiesComponent;
  let fixture: ComponentFixture<CitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      declarations: [
        HeaderComponent, 
        CountriesComponent,
        CountryComponent,
        CitiesComponent,
        CityComponent,
        CityForm
      ],
      providers: [
          GeoService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('init cities length', () => {
      expect(comp.cities.length).toBe(0);
  });

  it('check hideChangeForm function', () => {
      comp.hideChangeForm();
      expect(comp.changingCityId).toBe(null);
  });

  it('changingCityId is undefined', () => {
      expect(comp.changingCityId).toBe(undefined);
  });

});
