import { Component, Input, OnInit, Output, EventEmitter }               from '@angular/core';
import { FormGroup, FormControl, FormBuilder }                          from '@angular/forms';

import { GeoService }                                                   from '../../services/geo.service';
import { City }                                                         from '../../shared/city';

import                                                                       'rxjs/add/operator/map';

@Component({
    selector: 'city-form',
    template: 
    `
        <div class="addcity">
           <h4>{{type}}</h4>
           <form [formGroup]="addingForm" (ngSubmit)="addCity($event)">
                <input type="text" placeholder="city name" [formControl]="title">
                <br>
                <textarea name="name" rows="4" [formControl]="description" placeholder="city description"></textarea>
                <button type="submit" name="button">submit</button>
                <button type="button" name="button" (click)="cancel()">cancel</button>
           </form>    
        </div>
    `,
    styles: [
        `
        input[type=text], textarea {
            width: calc(100% - 20px);
            display: block;
            font-size: 1em;
            border: 1px solid blue;
            border-radius: 4px;
            padding: 10px;
        }
        h4 {
            margin: 10px;
            text-align: center;
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

export class CityForm implements OnInit {

    @Input()
    countryId: number;

    @Input()
    city: City;

    @Input()
    type: string = 'add city';

    @Output()
    hideChangeForm = new EventEmitter();

    private nextIndex: number;

    title = new FormControl('');
    description = new FormControl('');

    addingForm: FormGroup = this.builder.group({
        username: this.title,
        password: this.description
    });

    constructor(
        private builder: FormBuilder,
        private geo: GeoService
    ) { }

    ngOnInit() {
        this.geo.cities
            .subscribe((cities: City[]) => {
                this.nextIndex = Math.max.apply(null, cities.map((e: City) => e.id)) + 1;
            })
        
        if (this.type !== 'add city') {
            this.title.setValue(this.city.title);
            this.description.setValue(this.city.desc);
        }
    }

    addCity(event: Event) {
        event.preventDefault();
        if (this.type === 'add city') {
            let newCity = new City(
                this.nextIndex,
                this.countryId,
                this.title.value,
                this.description.value
            );
            this.geo.addCity(newCity);
            this.addingForm.reset();
        } else {
            let changedCity = new City(
                this.city.id,
                this.city.country_id,
                this.title.value,
                this.description.value
            );
            this.geo.changeCity(changedCity, this.city.id);
            this.addingForm.reset();
        }
        this.hideChangeForm.emit();
    }

    cancel() {
        if (this.type === 'add city') {
            this.addingForm.reset();
        } else {
            console.log('c');
        }
        this.hideChangeForm.emit();
    }

}
