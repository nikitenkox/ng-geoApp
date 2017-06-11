import { Component, OnInit, Input, Output, EventEmitter }               from '@angular/core';
import { Country }                                                      from '../../shared/country';
import { GeoService }                                                   from '../../services/geo.service';

@Component({
    selector: 'countries',
    template:
    `
        <div class="countries">
            <country *ngFor="let country of countries"
                [country]="country"
                [active]="selectedCountryId === country.id"
                (selectedCountryId)="selectCountry($event)">
            </country>
        </div>
    `,
    styles: [
        `
        .countries {
            position: relative;
            width: 30%;
            margin-top: 10px;
            float: left;
        }
        `
    ]
})

export class CountriesComponent implements OnInit {

    countries: Country[];

    private selectedCountryId: number;

    constructor(private geo: GeoService) { }

    ngOnInit() {
        this.geo.getAllCountries()
            .subscribe((data: Country[]) => {
                this.countries = data;
            })
    }

    selectCountry(id: number) {
        this.selectedCountryId = id;
        this.geo.setDisplayedCountry(id);
    }
}
