import {Modification} from "./modification";

export class Vehicle {
    
    vehicleId: number;
    ownerName: string;
    engineRunning: boolean;
    date: Date;
    fileName: string;
    vehicleType: number;
    horsepower: number;
    torque: number;
    modifications: Modification[];
}
