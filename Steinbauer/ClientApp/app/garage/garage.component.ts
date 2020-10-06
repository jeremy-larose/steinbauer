import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {DataService} from "../shared/dataService";

@Component( {
    selector: "the-garage",
    templateUrl: "garage.component.html"
})

export class Garage {
    constructor(public data: DataService, public router: Router) {
        this.data = data;
    }

    title = 'Steinbauer Garage';
}