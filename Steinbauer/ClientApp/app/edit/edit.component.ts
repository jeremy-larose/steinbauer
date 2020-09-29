import {Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";

@Component({
    selector: "edit",
    templateUrl: "edit.component.html",
    styleUrls: [ "edit.component.css" ]
})

export class Edit {
    constructor( public data: DataService, public router: Router ) {
        this.vehicle = data.vehicle;
    }
    
    public vehicle: Vehicle = new Vehicle();

    ngOnInit() {
        this.data.loadVehicle( this.vehicle ).subscribe(() =>
            this.vehicle = this.data.vehicle);
    }
}