import { Component, OnInit }                                                    from '@angular/core';
import { City }                                                                 from '../../shared/city';
import { GeoService }                                                           from '../../services/geo.service';

@Component({
    selector: 'cities',
    template: `
    <div class="cities">
        <button (click)="toggleForm()" *ngIf="!initState">+ Add city</button>
        <city-form *ngIf="showForm" [countryId]="countryId" (hideChangeForm)="hideChangeForm()"></city-form>
        <city *ngFor="let city of cities" [city]="city"></city>
        <div *ngIf="!cities.length">no cities</div>
    </div>
    `,
    styles: [
        `
            .cities {
                position: relative;
                width: 68%;
                padding: 1%;
                float: right;
            }
            button {
                background-color: #0072bc;
                padding: 5px;
                border: none;
                margin-left: 10px;
                color: white;
                padding: 10px 30px;
                margin: 10px 0;
                font-size: 1em;
                border-radius: 5px;
            }
        `
    ]
})

export class CitiesComponent implements OnInit {

    initState: boolean;
    cities: City[] = [];
    countryId: number = null;
    changingCityId: number;

    private showForm: boolean = false;

    constructor(private geo: GeoService) { }

    ngOnInit() {
        this.geo.getAllCities();
        this.geo.cities
            .subscribe((data: City[]) => {
                this.cities = data;
            })

        this.geo.displayedCountryId
            .subscribe(id => {
                this.geo.cities
                    .subscribe((data: City[]) => {
                        if (!id) {
                            this.cities = data;
                            this.initState = true;
                        } else {
                            this.countryId = id;
                            this.initState = false;
                            this.cities = data.filter((city: City) => {
                                return city.country_id === id;
                            });
                        }
                    })
            });
    }

    private toggleForm() {
        this.showForm = !this.showForm;
    }

    hideChangeForm() {
        this.showForm = false;
        this.changingCityId = null;
    }

}
