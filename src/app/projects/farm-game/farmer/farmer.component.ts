import { Component, Input } from '@angular/core';
import * as _ from "lodash";

import {Farmer} from "./farmer.model";

@Component({
  selector: 'farmer-info',
  template: `
      <label>Farmname: {{farmer.farmName}} | Money: {{farmer.money}}</label>
  `,
  styles: [`
    label {
      display: block;
    }`
  ]
})
export class FarmerInfoComponent {
  @Input()
  farmer: Farmer;
  farmerEdit : boolean;

  editFarmer() : void {
    this.farmerEdit = true;
  }

  saveFarmer() : void {
    this.farmerEdit = false;
  }
}
