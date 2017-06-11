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
var geo_service_1 = require("../../services/geo.service");
var CitiesComponent = (function () {
    function CitiesComponent(geo) {
        this.geo = geo;
        this.cities = [];
        this.countryId = null;
        this.showForm = false;
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geo.getAllCities();
        this.geo.cities
            .subscribe(function (data) {
            _this.cities = data;
        });
        this.geo.displayedCountryId
            .subscribe(function (id) {
            _this.geo.cities
                .subscribe(function (data) {
                if (!id) {
                    _this.cities = data;
                    _this.initState = true;
                }
                else {
                    _this.countryId = id;
                    _this.initState = false;
                    _this.cities = data.filter(function (city) {
                        return city.country_id === id;
                    });
                }
            });
        });
    };
    CitiesComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
    };
    CitiesComponent.prototype.hideChangeForm = function () {
        this.showForm = false;
        this.changingCityId = null;
    };
    return CitiesComponent;
}());
CitiesComponent = __decorate([
    core_1.Component({
        selector: 'cities',
        template: "\n    <div class=\"cities\">\n        <button (click)=\"toggleForm()\" *ngIf=\"!initState\">+ Add city</button>\n        <city-form *ngIf=\"showForm\" [countryId]=\"countryId\" (hideChangeForm)=\"hideChangeForm()\"></city-form>\n        <city *ngFor=\"let city of cities\" [city]=\"city\"></city>\n        <div *ngIf=\"!cities.length\">no cities</div>\n    </div>\n    ",
        styles: [
            "\n            .cities {\n                position: relative;\n                width: 68%;\n                padding: 1%;\n                float: right;\n            }\n            button {\n                background-color: #0072bc;\n                padding: 5px;\n                border: none;\n                margin-left: 10px;\n                color: white;\n                padding: 10px 30px;\n                margin: 10px 0;\n                font-size: 1em;\n                border-radius: 5px;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [geo_service_1.GeoService])
], CitiesComponent);
exports.CitiesComponent = CitiesComponent;
//# sourceMappingURL=cities.component.js.map