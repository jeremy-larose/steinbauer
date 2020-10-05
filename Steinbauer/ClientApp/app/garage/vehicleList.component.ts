import {Component, OnInit} from "@angular/core";
import {DataService} from "../shared/dataService";
import {Vehicle} from "../shared/vehicle";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: "vehicle-list",
    templateUrl: "vehicleList.component.html",
    styleUrls: ["vehicleList.component.css"]
})


export class VehicleList implements OnInit {
    constructor(public data: DataService, private router: Router) {
        this.vehicles = data.vehicles;
        
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false;
            }
        }); 
    }

    mySubscription: any;

    public vehicles: Vehicle[];

    onEdit(vehicle) {
        this.data.vehicle = vehicle;
        this.router.navigate(["edit"]);
    }

    onDelete(vehicle) {
        this.data.deleteVehicle(vehicle).subscribe(() => {
            this.router.navigate(["garage"])
        });
    }

    ngOnInit() {
        this.data.loadVehicles().subscribe(() =>
            this.vehicles = this.data.vehicles);
    }

    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    } 

    displayEngineStatus(engineStatus) {
        if (engineStatus == true)
            return "Running";
        else
            return "Stopped";
    }

    displayVehicleTypeName(vehicleType) {
        switch (vehicleType) {
            case 0:
                return "Sedan";
            case 1:
                return "Truck";
            case 2:
                return "Crossover";
            case 3:
                return "Compact";
            case 4:
                return "Semi Truck";
        }
        return "Undefined";
    }
}