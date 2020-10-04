import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
    public index: number;
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

    checkoutVehicle() {
        return this.http.post( "/api/vehicles", this.vehicle,{
        })
            .pipe( map( response => {
                this.vehicle = new Vehicle();
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

    getExistingVehicle( id ) {
        var url: string = "/api/vehicles/" + id.toString();
        return this.http.get( url ).pipe( map( ( response: Vehicle ) => {
            if( response.vehicleId == id )
                return true;
        }));
    }
    
    updateVehicle( vehicle ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.put( url, this.vehicle )  
            .pipe( map( ( response: Vehicle ) => {
            this.vehicle = new Vehicle();
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
    
    deleteVehicle( vehicle ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.delete( url ).pipe( 
            map( ( response: Vehicle ) => {
                this.vehicle = new Vehicle();
                return true;
            })
        );
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
    
    public removeFromOrder( modification : Modification)
    {
        this.order.modifications.splice( this.order.modifications.indexOf( modification ), 1 );
    }
    
    public addVehicleToOrder( newVehicle: Vehicle )
    {
        var veh : Vehicle = new Vehicle();
        veh.vehicleId = newVehicle.vehicleId;
        veh.ownerName = newVehicle.ownerName;
        veh.engineRunning = true;
        veh.date = new Date();
        veh.fileName = "dodgeCharger.jpg";
        //veh.vehicleType = 1;
        veh.horsepower = newVehicle.horsepower;
        veh.torque = newVehicle.torque;
        
        this.order.orderVehicle = veh;
        
        this.order.orderVehicles.push( veh );
    }
}