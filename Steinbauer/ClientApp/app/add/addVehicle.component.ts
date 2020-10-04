import {Component, OnInit, ViewChild} from "@angular/core";
import { DataService } from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";
import {VehicleType} from "../app.component";

@Component({
    selector: "addVehicle",
    templateUrl: "addVehicle.component.html",
    styleUrls: [ "addVehicle.component.css" ]

})

export class AddVehicle {
    constructor( public data: DataService, public router: Router ) {
    }
    
    vehicleTypes = [ 
        'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi' 
    ];
    
    submitted = false;
    errorMessage: string = "";

    model = new Vehicle();
    
    gotoCheckout() {
        this.errorMessage = "";
        if( this.data.loginRequired ) {
            // Force Login
            this.router.navigate(["login"])
        } else {
            this.model.vehicleId = 0;
            for (let i = 0; i < this.data.vehicles.length; i++) {
                if (this.data.getExistingVehicle(i)) {
                    continue;
                }

                this.model.vehicleId = i;
                break;
            }

            this.data.vehicle.vehicleId = this.model.vehicleId;
            this.data.vehicle.ownerName = this.model.ownerName;
            if (this.model.engineRunning == undefined) {
                this.model.engineRunning = false;
            }
            this.data.vehicle.engineRunning = this.model.engineRunning;
            this.data.vehicle.fileName = "dodgeCharger.jpg";
            this.data.vehicle.vehicleType = this.vehicleTypes.indexOf(this.model.vehicleType.toString());
            this.data.vehicle.horsepower = this.model.horsepower;
            this.data.vehicle.torque = this.model.torque;
            this.data.vehicle.modifications = this.model.modifications;
            // Go to checkout             

            this.data.checkoutVehicle()
                .subscribe(success => {
                    if (success) {
                        this.router.navigate(["garage"]);
                    }
                }, err => this.errorMessage = "Failed to save order.");
        }
    }
}