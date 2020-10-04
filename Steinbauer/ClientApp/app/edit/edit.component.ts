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
    
    errorMessage = "";
    public vehicle: Vehicle = new Vehicle();
    model = new Vehicle();
    
    vehicleTypes = [
        'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi'
    ];

    ngOnInit() {
        this.data.loadVehicle( this.vehicle ).subscribe(() =>
            this.vehicle = this.data.vehicle);
    }
    
    onSubmit() {
        this.vehicle.vehicleType = this.vehicleTypes.indexOf(this.vehicle.vehicleType.toString());
        alert( "Engine Status: " + this.vehicle.engineRunning );
        this.data.updateVehicle( this.vehicle )
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to add new vehicle.")
    }
}