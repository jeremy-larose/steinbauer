import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { VehicleList } from "./garage/vehicleList.component";
import { ModificationList } from "./garage/modificationList.component";
import { DataService } from "./shared/dataService";
import { Cart } from "./garage/cart.component";
import { RouterModule } from "@angular/router";
import { Garage } from "./garage/garage.component";
import { Checkout } from "./checkout/checkout.component";
import { Login } from "./login/login.component";
import { Edit } from "./edit/edit.component";
import { AddVehicle } from "./add/addVehicle.component";
import { FormsModule } from "@angular/forms";
import {Vehicle} from "./shared/vehicle";

let routes = [
  { path: "", component: Garage },
  { path: "checkout", component: Checkout },
  { path: "login", component: Login },
  { path: "edit", component: Edit },
  { path: "addVehicle", component: AddVehicle },
    { path: "garage", component: Garage }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleList,
    ModificationList,
    Cart,
    Garage,
    Checkout,
    Login,
    Edit,
      AddVehicle,
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