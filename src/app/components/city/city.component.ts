import { Component, Input }                                from '@angular/core';
import { City }                                            from '../../shared/city';
import { GeoService }                                      from '../../services/geo.service';

@Component({
    selector: 'city',
    template: 
        `
        <div class="citi-wr">
          <div class="del" (click)="delCity(city.id)">
            &#10060;
          </div>
          <div class="changecity" (click)="changeCity(city.id)">
            &#9998;
          </div>
          <h3>{{city?.title}}</h3>
          <p>
            {{city?.desc}}
          </p>
          <city-form [city]="city" *ngIf="changingCityId === city.id" [type]="'change city'" (hideChangeForm)="hideChangeForm()"></city-form>
        </div>
        `,
    styles: [
        `
            .citi-wr {
                width: 97%;
                padding: 10px;
                color: #494949;
                margin-bottom: 5px;
                border: 1px solid gray;
            }
            .changecity, .del {
                float: right;
                position: relative;
                padding: 10px;
                cursor: pointer;
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

export class CityComponent {
    @Input()
    city: City;

    private changingCityId: number;
    private showForm: boolean = false;

    constructor(private geo: GeoService) { }

    delCity(id: number) {
        this.geo.deleteCity(id);
    }

    changeCity(id: number) {
        this.changingCityId = id;
    }

    hideChangeForm() {
        this.changingCityId = null;
    }

}