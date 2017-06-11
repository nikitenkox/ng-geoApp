"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var geo_service_1 = require("../../services/geo.service");
var city_1 = require("../../shared/city");
require("rxjs/add/operator/map");
var CityForm = (function () {
    function CityForm(builder, geo) {
        this.builder = builder;
        this.geo = geo;
        this.type = 'add city';
        this.hideChangeForm = new core_1.EventEmitter();
        this.title = new forms_1.FormControl('');
        this.description = new forms_1.FormControl('');
        this.addingForm = this.builder.group({
            username: this.title,
            password: this.description
        });
    }
    CityForm.prototype.ngOnInit = function () {
        var _this = this;
        this.geo.cities
            .subscribe(function (cities) {
            _this.nextIndex = Math.max.apply(null, cities.map(function (e) { return e.id; })) + 1;
        });
        if (this.type !== 'add city') {
            this.title.setValue(this.city.title);
            this.description.setValue(this.city.desc);
        }
    };
    CityForm.prototype.addCity = function (event) {
        event.preventDefault();
        if (this.type === 'add city') {
            var newCity = new city_1.City(this.nextIndex, this.countryId, this.title.value, this.description.value);
            this.geo.addCity(newCity);
            this.addingForm.reset();
        }
        else {
            var changedCity = new city_1.City(this.city.id, this.city.country_id, this.title.value, this.description.value);
            this.geo.changeCity(changedCity, this.city.id);
            this.addingForm.reset();
        }
        this.hideChangeForm.emit();
    };
    CityForm.prototype.cancel = function () {
        if (this.type === 'add city') {
            this.addingForm.reset();
        }
        else {
            console.log('c');
        }
        this.hideChangeForm.emit();
    };
    return CityForm;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CityForm.prototype, "countryId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", city_1.City)
], CityForm.prototype, "city", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CityForm.prototype, "type", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CityForm.prototype, "hideChangeForm", void 0);
CityForm = __decorate([
    core_1.Component({
        selector: 'city-form',
        template: "\n        <div class=\"addcity\">\n           <h4>{{type}}</h4>\n           <form [formGroup]=\"addingForm\" (ngSubmit)=\"addCity($event)\">\n                <input type=\"text\" placeholder=\"city name\" [formControl]=\"title\">\n                <br>\n                <textarea name=\"name\" rows=\"4\" [formControl]=\"description\" placeholder=\"city description\"></textarea>\n                <button type=\"submit\" name=\"button\">submit</button>\n                <button type=\"button\" name=\"button\" (click)=\"cancel()\">cancel</button>\n           </form>    \n        </div>\n    ",
        styles: [
            "\n        input[type=text], textarea {\n            width: calc(100% - 20px);\n            display: block;\n            font-size: 1em;\n            border: 1px solid blue;\n            border-radius: 4px;\n            padding: 10px;\n        }\n        h4 {\n            margin: 10px;\n            text-align: center;\n        }\n        button {\n            background-color: #0072bc;\n            padding: 5px;\n            border: none;\n            margin-left: 10px;\n            color: white;\n            padding: 10px 30px;\n            margin: 10px 0;\n            font-size: 1em;\n            border-radius: 5px;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        geo_service_1.GeoService])
], CityForm);
exports.CityForm = CityForm;
//# sourceMappingURL=cities-form.component.js.map