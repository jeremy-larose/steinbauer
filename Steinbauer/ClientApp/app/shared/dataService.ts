import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";
import { Vehicle } from "./vehicle";
import { Modification } from "./modification";

@Injectable()
export class DataService {
        
    constructor( private http: HttpClient ) {
    }

    private token: string = "";
    private tokenExpiration: Date;
    public index: number;
    public vehicle: Vehicle = new Vehicle();
    public vehicles: Vehicle[] = [];
    
    public modification: Modification = new Modification();
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
    
    removeMod( vehicle, id ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString() + "/mods/" + id;
        return this.http.delete( url ).pipe(
            map( ( response: Modification ) => {
                this.modification = new Modification();
                return true;
            })
        );
    }
    
    addMod( vehicle, id ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString() + "/mods";
        return this.http.post( url, this.modification ).pipe(
            map( ( response: Modification ) => {
                this.modification = new Modification();
                return true;
            })
        );
    }
    
    deleteVehicle( vehicle ) {
        var url: string = "/api/vehicles/" + vehicle.vehicleId.toString();
        this.http.delete( url );
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
    
    getExistingVehicleMod( vehicleId : number, i: number ) {
        var url: string = "/api/vehicles/" + vehicleId.toString() + "/mods/" + i.toString();
        return this.http.get( url ).pipe( map( ( response ) => {
            return true;
        }));
    }

    getModsForVehicle(vehicleId: number) {
        var url: string = "/api/vehicles/" + vehicleId.toString() + "/mods";
        return this.http.get( url ).pipe( map( ( data: any[] ) => {
            this.modifications = data;
        }));
    }

    addModToVehicle( vehicleId: number ) {
        var url: string = "/api/vehicles/" + vehicleId.toString() + "/mods";
        return this.http.post( url, this.modification ).pipe( map( ( response: Modification ) => {
            this.modification = new Modification();
            return true;
        }));
    }
}