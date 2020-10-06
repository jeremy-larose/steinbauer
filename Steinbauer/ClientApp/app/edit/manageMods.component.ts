import {Component} from "@angular/core";
import {DataService} from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";
import {Modification} from "../shared/modification";

@Component({
    selector: "manage-mods",
    templateUrl: "manageMods.component.html",
})

export class ManageMods {
    constructor(public data: DataService, public router: Router) {
        this.vehicle = data.vehicle;
        this.modifications = data.modifications;
    }

    errorMessage = "";
    public modifications: Modification[] = [];
    public modification: Modification = new Modification();
    public vehicle: Vehicle = new Vehicle();
    public model = new Modification();

    ngOnInit() {
        this.data.loadVehicle(this.vehicle).subscribe(() =>
            this.vehicle = this.data.vehicle);

        this.data.loadModifications().subscribe(() =>
            this.modifications = this.data.modifications);
    }

    public addModToVehicle() {
        this.errorMessage = "";
        if (this.data.loginRequired) {
            this.router.navigate(["login"])
        } else {
            this.model.modificationId = this.modifications.length + 1;

            for (let i = 0; i < this.data.modifications.length; i++) {
                if (this.data.getExistingVehicleMod(this.data.vehicle.vehicleId, i)) {
                    continue;
                }

                this.model.modificationId = i;
                break;
            }

            this.data.modification.modificationId = this.model.modificationId;
            this.data.modification.modificationName = this.model.modificationName;
            this.data.modification.horsepower = this.model.horsepower;
            this.data.modification.torque = this.model.torque;

            alert("Added mod to vehicle: " + this.data.modification.modificationName);
            this.data.addModToVehicle(this.vehicle.vehicleId)
                .subscribe(success => {
                    if (success) {
                        this.router.navigate(["garage"]);
                    }
                }, err => this.errorMessage = "Failed to save order.");
        }
    }

    removeModFromVehicle(id) {
        this.data.removeMod(this.vehicle, id).subscribe(success => {
            if (success) {
                alert("Successfully removed modification.");
                this.router.navigate(["/"]);
            }
        }, err => alert("Failed to remove modification."))
    }

    calcHorsepower() {
        var total: number = this.vehicle.horsepower;
        for (let i = 0; i < this.vehicle.modifications.length; i++) {
            total += this.vehicle.modifications[i].horsepower;
        }
        return total;
    }

    calcTorque() {
        var total: number = this.vehicle.torque;
        for (let i = 0; i < this.vehicle.modifications.length; i++) {
            total += this.vehicle.modifications[i].torque;
        }

        return total;
    }
}