import { Component, Input, Output, EventEmitter }                       from '@angular/core';
import { Country }                                                      from '../../shared/country';
import { GeoService }                                                   from '../../services/geo.service';

@Component({
    selector: 'country',
    template: 
        `
        <div class="count-wr" [ngClass]="{'active': active}" (click)="selectCountry(country.id)">
          <div>
            <h3>{{country.title}}</h3>
            <p>
              {{country.text}}
            </p>
          </div>
          <div [ngClass]="{'triangle': active}"></div>
        </div>
        `,
    styles: [
        `
        .countries p {
            color: #464646;
            font-size: 1em;
        }
        .count-wr {
            position: relative;
            width: 90%;
            margin-bottom: 2px;
            padding: 4%;
            background: #f0f0f0;
            cursor: pointer;
        }
        .triangle {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-left: 10px solid #0072bc;
            border-bottom: 5px solid transparent;
            position: absolute;
            right: -10px;
            top: 45%;
        }
        .active {
            background-color: #0072bc;
        }
        .active p, .active h3 {
            color: white;
        }
        `
    ]
})

export class CountryComponent {
    @Input()
    country: Country;

    @Input()
    active: boolean;

    @Output()
    selectedCountryId = new EventEmitter();

    constructor(private geo: GeoService) { }

    selectCountry(id: number) {
        this.selectedCountryId.emit(id);
    }

}
