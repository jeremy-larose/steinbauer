import {Component, OnInit} from "@angular/core";
import {DataService} from "../shared/dataService";
import {Modification} from "../shared/modification";
import {Vehicle} from "../shared/vehicle";
import {Router} from "@angular/router";

@Component({
    selector: "modification-list",
    templateUrl: "modificationList.component.html",
    styleUrls: ["modificationList.component.css"]
})

export class ModificationList implements OnInit {
    constructor(private data: DataService, public router: Router) {
        this.modifications = data.modifications;
        this.data = data;
        this.vehicle = data.vehicle;
    }

    public modifications: Modification[] = [];
    public vehicle = new Vehicle();
    public errorMessage = "";

    ngOnInit() {
        this.data.loadModifications().subscribe(() =>
            this.modifications = this.data.modifications);
    }

    public addModToVehicle(id) {
        this.data.addMod(this.vehicle, id).subscribe(success => {
            if (success) {
            }
        }, err => this.errorMessage = "Failed to add modification to vehicle.")
    }

    public removeModFromVehicle(id) {
        this.data.removeMod(this.vehicle, id).subscribe(success => {
            if (success) {
            }
        }, err => this.errorMessage = "Failed to remove modification from vehicle.")
    }

}