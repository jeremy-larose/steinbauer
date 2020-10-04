import {Modification} from "./modification";
import {VehicleType} from "../app.component";

export class Vehicle {
    
    vehicleId: number;
    ownerName: string;
    engineRunning: boolean;
    date: Date;
    fileName: string;
    vehicleType: number;
    horsepower: number;
    torque: number;
    modifications: Array<Modification> = new Array<Modification>();
}
