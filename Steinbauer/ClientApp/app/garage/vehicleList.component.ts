import {Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Vehicle } from "../shared/vehicle";
import {Router} from "@angular/router";

@Component({
    selector: "vehicle-list",
    templateUrl: "vehicleList.component.html",
    styleUrls: [ "vehicleList.component.css" ]
})

export class VehicleList implements OnInit {
    constructor( public data: DataService, private router: Router ){
        this.vehicles = data.vehicles;
    }
    
    public vehicles: Vehicle[] = [];
    
    onEdit( vehicle ) {
        this.data.vehicle = vehicle;
        this.router.navigate( ["edit"]);
    }
    
    onAdd() {
        this.router.navigate( ["add"]);
    }
    
    ngOnInit() {
        this.data.loadVehicles().subscribe(() =>
            this.vehicles = this.data.vehicles);
    }

    displayEngineStatus( engineStatus ) {
        if( engineStatus == true )
            return "Yes";
        
        return "No";
    }
    
    displayVehicleTypeName( vehicleType ) {
        switch( vehicleType )
        {
            case 0: return "Sedan";
            case 1: return "Truck";
            case 2: return "Compact";
            case 3: return "Crossover";
            case 4: return "Semi Truck";
        }
        return "Undefined";
    }
}