import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { VehicleList } from "./garage/vehicleList.component";
import { ModificationList } from "./garage/modificationList.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
import { Garage } from "./garage/garage.component";
import { Login } from "./login/login.component";
import { Edit } from "./edit/edit.component";
import { AddVehicle } from "./add/addVehicle.component";
import { FormsModule } from "@angular/forms";
import {Checkout} from "./checkout/checkout.component";

let routes = [
  { path: "", component: Garage },
  { path: "login", component: Login },
  { path: "edit", component: Edit },
  { path: "addVehicle", component: AddVehicle },
    { path: "garage", component: Garage },
    { path: "checkout", component: Checkout },
    { path: "app", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleList,
    ModificationList,
    Garage,
    Login,
    Edit,
      AddVehicle,
      Checkout
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false // for debugging the routes
        }),
        FormsModule
    ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent], 
})

export class AppModule { }