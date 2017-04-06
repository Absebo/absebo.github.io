import * as _ from "lodash";
import { Injectable } from '@angular/core';

import {Farmer} from "./farmer.model";

@Injectable()
export class FarmerService {
  farmer : Farmer = this.loadFarmer();

  getFarmer() : Farmer {
    return this.farmer;
  }

  loadFarmer() : Farmer {
    return {name:"Mr. Farmer", farmName:"Samplefarm", money:300};
  }

  saveFarmer(farmer : Farmer) : void {
    this.farmer = farmer;
  }
 };
