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
var city_1 = require("../../shared/city");
var geo_service_1 = require("../../services/geo.service");
var CityComponent = (function () {
    function CityComponent(geo) {
        this.geo = geo;
        this.showForm = false;
    }
    CityComponent.prototype.delCity = function (id) {
        this.geo.deleteCity(id);
    };
    CityComponent.prototype.changeCity = function (id) {
        this.changingCityId = id;
    };
    CityComponent.prototype.hideChangeForm = function () {
        this.changingCityId = null;
    };
    return CityComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", city_1.City)
], CityComponent.prototype, "city", void 0);
CityComponent = __decorate([
    core_1.Component({
        selector: 'city',
        template: "\n        <div class=\"citi-wr\">\n          <div class=\"del\" (click)=\"delCity(city.id)\">\n            &#10060;\n          </div>\n          <div class=\"changecity\" (click)=\"changeCity(city.id)\">\n            &#9998;\n          </div>\n          <h3>{{city?.title}}</h3>\n          <p>\n            {{city?.desc}}\n          </p>\n          <city-form [city]=\"city\" *ngIf=\"changingCityId === city.id\" [type]=\"'change city'\" (hideChangeForm)=\"hideChangeForm()\"></city-form>\n        </div>\n        ",
        styles: [
            "\n            .citi-wr {\n                width: 97%;\n                padding: 10px;\n                color: #494949;\n                margin-bottom: 5px;\n                border: 1px solid gray;\n            }\n            .changecity, .del {\n                float: right;\n                position: relative;\n                padding: 10px;\n                cursor: pointer;\n            }\n            button {\n                background-color: #0072bc;\n                padding: 5px;\n                border: none;\n                margin-left: 10px;\n                color: white;\n                padding: 10px 30px;\n                margin: 10px 0;\n                font-size: 1em;\n                border-radius: 5px;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [geo_service_1.GeoService])
], CityComponent);
exports.CityComponent = CityComponent;
//# sourceMappingURL=city.component.js.map