import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from "@angular/router";

@Component( {
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ['checkout.component.css']
})

export class Checkout {
    constructor( public data: DataService, public router: Router ) {
    }
    
    errorMessage: string = "";
    
    confirmVehicle() {
        this.data.checkoutVehicle().subscribe( success => {
            if ( success ) {
                this.router.navigate( ["garage"]);
            }
        }, err => this.errorMessage = "Failed to save order.");
    }
}