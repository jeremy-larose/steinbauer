import {Component, OnInit, ViewChild} from "@angular/core";
import { DataService } from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";

@Component({
    selector: "addVehicle",
    templateUrl: "addVehicle.component.html",
})

export class AddVehicle {
    constructor( public data: DataService, public router: Router ) {
    }
    vehicleTypes = [ 'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi' ];
    
    submitted = false;
    errorMessage: string = "";
    
    model = new Vehicle();
    
    public newVehicle = {
        ownerName: "",
        horsepower: 0,
        torque: 0,
        fileName: "",
        engineRunning: false,
        vehicleType: 0
    };
    
    gotoCheckout() {
        this.errorMessage = "";
        if( this.data.loginRequired ) {
            // Force Login
            this.router.navigate(["login"])
        } else {
            // TODO: There is a bug here where when vehicles get deleted the vehicle.Id needs to get updated, or else
            // it tries to add vehicles on top of existing vehicles and returns an error. Maybe not using vehicle IDs at all 
            // would be best and just instead rely on their position within the array?
            this.data.loadVehicles();
            this.data.vehicle.vehicleId = this.data.vehicles.length+1;
            this.data.vehicle.ownerName = this.model.ownerName;
            if( this.model.engineRunning == undefined )
            {
                this.model.engineRunning = false;
            }
            this.data.vehicle.engineRunning = this.model.engineRunning;
            this.data.vehicle.fileName = "dodgeCharger.jpg";
            this.data.vehicle.vehicleType = 1;
            this.data.vehicle.horsepower = this.model.horsepower;
            this.data.vehicle.torque = this.model.torque;
            // Go to checkout             
            this.router.navigate(["checkout"])
        }
    }
    
    onCheckout() {
        
        this.data.checkoutVehicle()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to add new vehicle.")
    }
}