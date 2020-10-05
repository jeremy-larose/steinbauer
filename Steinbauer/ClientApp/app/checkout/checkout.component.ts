import {Component, OnInit, ViewChild} from "@angular/core";
import { DataService } from "../shared/dataService";
import {Router} from "@angular/router";
import {Vehicle} from "../shared/vehicle";
import {VehicleType} from "../app.component";
import {Order} from "../shared/order";

@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
})

export class Checkout {
    constructor(public data: DataService, public router: Router) {
        this.order = data.order;
    }

    public order: Order;
}