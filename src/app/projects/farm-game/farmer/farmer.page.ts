import { Component, Input } from '@angular/core';
import * as _ from "lodash";

import {Farmer} from "./farmer.model";

@Component({
  selector: 'farmer-page',
  template: `
      <div *ngIf="farmerEdit">
        <label for="farmer.name">Name:
          <input id="farmer.name" [(ngModel)]="farmer.name" placeholder="your name">
        </label>
        <label for="farmer.farmName">Farmname:
          <input id="farmer.farmName" [(ngModel)]="farmer.farmName" placeholder="Name of your farm">
        </label>
        <label>Money: {{farmer.money}}</label>
        <button (click)="saveFarmer()" class="btn"> Save </button>
      </div>
      <div *ngIf="!farmerEdit">
        <label>Name: {{farmer.name}}</label>
        <label>Farmname: {{farmer.farmName}}</label>
        <label>Money: {{farmer.money}}</label>
        <button (click)="editFarmer()" class="btn"> Edit </button>
      </div>
  `,
  styles: [`
    label {
      display: block;
    }`
  ]
})
export class FarmerPage {
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
