import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'the-garage',
  templateUrl: './app.component.html',
    styleUrls: [ "./app.component.css" ]
})

export class AppComponent {
  title: "steinbauer-app";
  vehicleControl = new FormControl( '', [Validators.required]);
  selectFormControl = new FormControl( '', [Validators.required]);

  vehicleTypes: VehicleType[] = [
    { value: 0, viewValue: 'Sedan ' },
    { value: 1, viewValue: 'Truck' },
    { value: 2, viewValue: 'Compact' },
    { value: 3, viewValue: 'Crossover' },
    { value: 4, viewValue: 'Semi' }
  ];
}

export interface VehicleType {
  value: number;
  viewValue: string;
}