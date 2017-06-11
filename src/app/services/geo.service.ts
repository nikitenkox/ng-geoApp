import { Injectable }                                                   from '@angular/core';
import { Http, Response }                                               from '@angular/http';
import { Observable }                                                   from 'rxjs';
import { BehaviorSubject }                                              from 'rxjs/BehaviorSubject';

import                                                                       'rxjs/add/operator/map';
import                                                                       'rxjs/add/operator/share';

import { City }                                                         from '../shared/city';
import { Country }                                                      from '../shared/country';

@Injectable()
export class GeoService {

    public countries: Observable<Country[]>;
    public cities: Observable<City[]>;

    private _cities: BehaviorSubject<City[]>;
    private _displayedCountryId: BehaviorSubject<number> = new BehaviorSubject(0);

    public displayedCountryId: Observable<number> = this._displayedCountryId.asObservable();

    public dataStore: {
        countries: Country[],
        cities: City[],
        displayedCountryId: number | string
    };

    constructor(private http: Http) {
        this.dataStore = {
            countries: [],
            cities: [],
            displayedCountryId: ''
        };
        this._cities = <BehaviorSubject<City[]>>new BehaviorSubject([]);
        this.cities = this._cities.asObservable();
    }

    public getAllCountries(): Observable<any> {
        let observable = this.http.get('app/shared/countries.json')
            .map((response: Response) =>  {
                return response.json();
            })
            .share();
        observable.subscribe((data: any) => {
                this.dataStore.countries = data;
            });
        return observable;
    }

    public getAllCities(): void {
        this.http.get('app/shared/cities.json')
            .map((response: Response) => response.json())
            .subscribe((data: City[]) => {
                this.dataStore.cities = data;
                this._cities.next(Object.assign({}, this.dataStore).cities);
            })
    }

    public setDisplayedCountry(id: number) {
        this.dataStore.displayedCountryId = id;
        this._displayedCountryId.next(id);
    }

    public addCity(city: City) {
        this.dataStore.cities.push(city);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    }

    public deleteCity(id: number) {
        let index = this.dataStore.cities.findIndex((city: City) => city.id === id);
        this.dataStore.cities.splice(index, 1);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    }

    public changeCity(city: City, id: number) {
        let index = this.dataStore.cities.findIndex((city: City) => city.id === id);
        this.dataStore.cities.splice(index, 1, city);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    }
}
