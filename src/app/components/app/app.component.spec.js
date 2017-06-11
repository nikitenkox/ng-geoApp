"use strict";
var app_component_1 = require("./app.component");
var countries_component_1 = require("../countries/countries.component");
var country_component_1 = require("../country/country.component");
var cities_component_1 = require("../cities/cities.component");
var city_component_1 = require("../city/city.component");
var cities_form_component_1 = require("../city-form/cities-form.component");
var header_component_1 = require("../header/header.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var geo_service_1 = require("../../services/geo.service");
var testing_1 = require("@angular/core/testing");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                countries_component_1.CountriesComponent,
                country_component_1.CountryComponent,
                cities_component_1.CitiesComponent,
                city_component_1.CityComponent,
                cities_form_component_1.CityForm
            ],
            providers: [geo_service_1.GeoService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map