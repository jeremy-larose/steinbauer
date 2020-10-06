import {Component} from "@angular/core";
import {DataService} from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";

@Component({
    selector: "edit",
    templateUrl: "edit.component.html",
})

export class Edit {
    constructor(public data: DataService, public router: Router) {
        this.vehicle = data.vehicle;
    }

    errorMessage = "";
    public vehicle: Vehicle = new Vehicle();
    model = new Vehicle();

    vehicleTypes = [
        {id: 0, name: 'Sedan'},
        {id: 1, name: 'Truck'},
        {id: 2, name: 'Crossover'},
        {id: 3, name: 'Compact'},
        {id: 4, name: 'Semi'}
    ];
    defaultOption = null;

    ngOnInit() {
        this.data.loadVehicle(this.vehicle).subscribe(() =>
            this.vehicle = this.data.vehicle);
    }

    checkout() {
        this.router.navigate(["checkout"]);
    }

    onSubmit() {
        this.vehicle.vehicleType = this.vehicleTypes[this.vehicle.vehicleType].id;
        //this.vehicle.vehicleType = this.vehicleTypes[this.vehicle.vehicleType].id;
        this.data.updateVehicle(this.vehicle)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to add new vehicle.")
    }
}