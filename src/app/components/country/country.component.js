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
var country_1 = require("../../shared/country");
var geo_service_1 = require("../../services/geo.service");
var CountryComponent = (function () {
    function CountryComponent(geo) {
        this.geo = geo;
        this.selectedCountryId = new core_1.EventEmitter();
    }
    CountryComponent.prototype.selectCountry = function (id) {
        this.selectedCountryId.emit(id);
    };
    return CountryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", country_1.Country)
], CountryComponent.prototype, "country", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CountryComponent.prototype, "active", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CountryComponent.prototype, "selectedCountryId", void 0);
CountryComponent = __decorate([
    core_1.Component({
        selector: 'country',
        template: "\n        <div class=\"count-wr\" [ngClass]=\"{'active': active}\" (click)=\"selectCountry(country.id)\">\n          <div>\n            <h3>{{country.title}}</h3>\n            <p>\n              {{country.text}}\n            </p>\n          </div>\n          <div [ngClass]=\"{'triangle': active}\"></div>\n        </div>\n        ",
        styles: [
            "\n        .countries p {\n            color: #464646;\n            font-size: 1em;\n        }\n        .count-wr {\n            position: relative;\n            width: 90%;\n            margin-bottom: 2px;\n            padding: 4%;\n            background: #f0f0f0;\n            cursor: pointer;\n        }\n        .triangle {\n            width: 0;\n            height: 0;\n            border-top: 5px solid transparent;\n            border-left: 10px solid #0072bc;\n            border-bottom: 5px solid transparent;\n            position: absolute;\n            right: -10px;\n            top: 45%;\n        }\n        .active {\n            background-color: #0072bc;\n        }\n        .active p, .active h3 {\n            color: white;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [geo_service_1.GeoService])
], CountryComponent);
exports.CountryComponent = CountryComponent;
//# sourceMappingURL=country.component.js.map