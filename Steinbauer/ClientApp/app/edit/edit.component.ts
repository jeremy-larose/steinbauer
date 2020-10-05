import {Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import {NavigationEnd, Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";
import {Modification} from "../shared/modification";
import {Order} from "../shared/order";

@Component({
    selector: "edit",
    templateUrl: "edit.component.html",
    styleUrls: [ "edit.component.css" ]
})

export class Edit {
    constructor( public data: DataService, public router: Router ) {
        this.vehicle = data.vehicle;
        this.modifications = data.modifications;
        
        
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.mySubscription = this.router.events.subscribe((addModToVehicle) => {
            if (addModToVehicle instanceof NavigationEnd) {
                this.router.navigated = false;
            }
        });
        this.mySubscription = this.router.events.subscribe((removeModFromVehicle) => {
            if (removeModFromVehicle instanceof NavigationEnd) {
                this.router.navigated = true;
            }
        }); 
    }
    
    mySubscription: any;
    errorMessage = "";
    public modifications: Modification[] = [];
    public vehicle: Vehicle = new Vehicle();
    public order:Order = new Order();
    model = new Vehicle();
    
    vehicleTypes = [
        'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi'
    ];
    
    ngOnInit() {
        this.data.loadVehicle( this.vehicle ).subscribe(() =>
            this.vehicle = this.data.vehicle);
        this.data.loadModifications().subscribe(() =>
            this.modifications = this.data.modifications); 
    }
    
    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    }
    
    public addModToOrder( newModification: Modification )
    {
        var mod : Modification = new Modification();

        mod.modificationId = newModification.modificationId;
        mod.torque = newModification.torque;
        mod.horsepower = newModification.horsepower;
        mod.modificationName = newModification.modificationName;
        
        this.data.order.modifications.push( mod );
    }

    public removeModFromVehicle( modification : Modification)
    {
        this.data.removeMod( this.vehicle, modification ).subscribe( success => {
            if( success ) {
                alert( "Removed successfully!");
            }
        }, err => this.errorMessage = "Failed to remove modification from vehicle.")
    }
    
    checkout() {
        this.router.navigate( ["checkout"]);
    }
    
    onSubmit() {
        this.vehicle.vehicleType = this.vehicleTypes.indexOf(this.vehicle.vehicleType.toString());
        this.data.updateVehicle( this.vehicle )
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to add new vehicle.")
    }
}