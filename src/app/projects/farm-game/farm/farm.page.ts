import { Component } from '@angular/core';
import * as _ from "lodash";

import {FarmerService} from "../farmer/farmer.service";
import {Farmer} from "../farmer/farmer.model";

@Component({
  selector: 'farm-page',
  template: `
    <farmer-info [farmer]="farmer"></farmer-info>
    <farm-area [farmer]="farmer"></farm-area>
  `,
  providers: [FarmerService]
})
export class FarmPage {
  farmer : Farmer = this.farmerService.getFarmer();

  constructor(private farmerService: FarmerService) { }
}
