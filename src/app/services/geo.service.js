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
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var GeoService = (function () {
    function GeoService(http) {
        this.http = http;
        this._displayedCountryId = new BehaviorSubject_1.BehaviorSubject(0);
        this.displayedCountryId = this._displayedCountryId.asObservable();
        this.dataStore = {
            countries: [],
            cities: [],
            displayedCountryId: ''
        };
        this._cities = new BehaviorSubject_1.BehaviorSubject([]);
        this.cities = this._cities.asObservable();
    }
    GeoService.prototype.getAllCountries = function () {
        var _this = this;
        var observable = this.http.get('app/shared/countries.json')
            .map(function (response) {
            return response.json();
        })
            .share();
        observable.subscribe(function (data) {
            _this.dataStore.countries = data;
        });
        return observable;
    };
    GeoService.prototype.getAllCities = function () {
        var _this = this;
        this.http.get('app/shared/cities.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.dataStore.cities = data;
            _this._cities.next(Object.assign({}, _this.dataStore).cities);
        });
    };
    GeoService.prototype.setDisplayedCountry = function (id) {
        this.dataStore.displayedCountryId = id;
        this._displayedCountryId.next(id);
    };
    GeoService.prototype.addCity = function (city) {
        this.dataStore.cities.push(city);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    };
    GeoService.prototype.deleteCity = function (id) {
        var index = this.dataStore.cities.findIndex(function (city) { return city.id === id; });
        this.dataStore.cities.splice(index, 1);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    };
    GeoService.prototype.changeCity = function (city, id) {
        var index = this.dataStore.cities.findIndex(function (city) { return city.id === id; });
        this.dataStore.cities.splice(index, 1, city);
        this._cities.next(Object.assign({}, this.dataStore).cities);
    };
    return GeoService;
}());
GeoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GeoService);
exports.GeoService = GeoService;
//# sourceMappingURL=geo.service.js.map