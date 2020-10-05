import {Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Modification } from "../shared/modification";
import {Vehicle} from "../shared/vehicle";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: "modification-list",
    templateUrl: "modificationList.component.html",
    styleUrls: [ "modificationList.component.css" ]
})

export class ModificationList implements OnInit {
    constructor( private data: DataService, public router: Router ){
        this.modifications = data.modifications;
        this.data = data;
        this.vehicle = data.vehicle;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false;
            }
        });
    }

    public modifications: Modification[] = [];
    public vehicle = new Vehicle();
    public errorMessage = "";
    public mySubscription: any;

    ngOnInit() {
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
        

        alert( "Adding modification to order: " + mod.modificationName);
        this.data.order.modifications.push( mod );
    }

    public removeModFromVehicle( id )
    {
        this.data.removeMod( this.vehicle, id ).subscribe( success => {
            if( success ) {
                alert( "Removed successfully!");
            }
        }, err => this.errorMessage = "Failed to remove modification from vehicle.")
    }
    
}