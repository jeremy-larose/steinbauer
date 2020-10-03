import {Modification} from "./modification";
import {Vehicle} from "./vehicle";
import {Observable} from "rxjs";

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    orderVehicle: Vehicle = new Vehicle();
    orderVehicles: Array<Vehicle> = new Array<Vehicle>();
    modifications: Array<Modification> = new Array<Modification>();
/*
    get horsepowerTotal(): number {
        return _.sum(_.map(this.modifications, m => m.horsepower));
    };

    get torqueTotal(): number {
        return _.sum(_.map(this.modifications, m => m.torque));
    }; */
}