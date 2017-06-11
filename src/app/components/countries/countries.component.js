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
var CountriesComponent = (function () {
    function CountriesComponent(geo) {
        this.geo = geo;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geo.getAllCountries()
            .subscribe(function (data) {
            _this.countries = data;
        });
    };
    CountriesComponent.prototype.selectCountry = function (id) {
        this.selectedCountryId = id;
        this.geo.setDisplayedCountry(id);
    };
    return CountriesComponent;
}());
CountriesComponent = __decorate([
    core_1.Component({
        selector: 'countries',
        template: "\n        <div class=\"countries\">\n            <country *ngFor=\"let country of countries\"\n                [country]=\"country\"\n                [active]=\"selectedCountryId === country.id\"\n                (selectedCountryId)=\"selectCountry($event)\">\n            </country>\n        </div>\n    ",
        styles: [
            "\n        .countries {\n            position: relative;\n            width: 30%;\n            margin-top: 10px;\n            float: left;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [geo_service_1.GeoService])
], CountriesComponent);
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map