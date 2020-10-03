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
        alert( "Checking out vehicle: " + this.vehicle.ownerName );
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
    
    findVehicles( 
        vehicleId: number, filter ='', sortOrder='asc',
        pageNumber = 0, pageSize = 3 ): Observable<Vehicle[]> {
        return this.http.get("/api/vehicles", {
            params: new HttpParams()
                .set('vehicleId', vehicleId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res => res["payload"])
        );
    }
    
    loadVehicle( vehicle ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.get( url ).pipe( map( ( response: Vehicle ) => {
            this.vehicle = response;
            return true;
        }));
    }
    
    // There is a bug here where using the vehicleID will cause errors when adding vehicles back to the database and the IDs
    // being the same. May need to figure out some other way of indexing or renumbering upon deletion in the MVC portion of the app
    // whenever HttpDelete is called?
    deleteVehicle( vehicle ) {
        return this.http.delete( "/api/vehicles/" + vehicle.vehicleId.toString().pipe( 
            map( ( response: Vehicle ) => {
                this.loadVehicles();
            })
        ) );
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
    
    public addVehicleToOrder( newVehicle: Vehicle )
    {
        var veh : Vehicle = new Vehicle();
        
        veh.vehicleId = this.vehicles.length+1;
        veh.ownerName = newVehicle.ownerName;
        veh.engineRunning = true;
        veh.date = new Date();
        veh.fileName = "dodgeCharger.jpg";
        veh.vehicleType = 1;
        veh.horsepower = newVehicle.horsepower;
        veh.torque = newVehicle.torque;
        
        this.order.orderVehicle = veh;
        
        this.order.orderVehicles.push( veh );
    }
}