import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'the-garage',
  templateUrl: './app.component.html',
    styleUrls: [ "./app.component.css" ]
})

export class AppComponent {
  title: "steinbauer-app";
}

export enum VehicleType {
  Sedan = 0,
  Truck = 1,
  Crossover = 2,
  Compact = 3,
  Semi = 4
}