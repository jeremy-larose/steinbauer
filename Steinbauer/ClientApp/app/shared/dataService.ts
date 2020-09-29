import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, pipe} from "rxjs";
import { map } from "rxjs/operators";
import { Vehicle } from "./vehicle";
import { Modification } from "./modification";
import { Order } from "./order";

@Injectable()
export class DataService {
        
    constructor( private http: HttpClient ) {
    }

    private token: string = "";
    private tokenExpiration: Date;
    public vehicle: Vehicle = new Vehicle();
    public order: Order = new Order();
    
    public vehicles: Vehicle[] = [];
    public modifications: Modification[] = [];
    
    public get loginRequired(): boolean { // We do not need login requirements for this app.
        //return this.token.length == 0 || this.tokenExpiration > new Date();
        return false;
    }
    
    login( creds ): Observable<boolean> {
        return this.http.post( "/account/createtoken", creds )
            .pipe( map(( data: any ) => {
                this.token = data.token; 
                this.tokenExpiration = data.expiration;
                return true;
            }));
    }
    
    checkout() {
        if( !this.order.orderVehicle ) {
            alert( "Vehicle not found.");
        }
        
        return this.http.post( "/api/vehicles", this.order, {
        })
            .pipe( map( response => {
                this.order = new Order();
                return true;
            }));
    }
    
    loadVehicles(): Observable<boolean> {
        return this.http.get( "/api/vehicles")
            .pipe( map( (data: any[]) => {
                this.vehicles = data;
                return true;
        }));
    }
    
    loadVehicle( vehicle ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.get( url ).pipe( map( ( response: Vehicle ) => {
            this.vehicle = response;
            return true;
        }));
    }
    
    loadModifications(): Observable<boolean> {
        return this.http.get( "/api/mods")
            .pipe( map( (data:any[]) => {
                this.modifications = data;
                return true;
            }));
    }
    
    public addToOrder( newModification: Modification )
    {
        var mod : Modification = new Modification();
        
        mod.modificationId = newModification.modificationId;
        mod.torque = newModification.torque;
        mod.horsepower = newModification.horsepower;
        mod.modificationName = newModification.modificationName;
        
        this.order.modifications.push( mod );
    }
}