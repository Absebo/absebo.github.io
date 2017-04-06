import { Component, Input, OnInit } from '@angular/core';

import {SeedService} from "../seed/seed.service";
import {Item, Seed} from "../main/item.model";
import {ItemService} from "../main/item.service";
import {ItemTypes} from "../main/item.constant";
import {Farmer} from "../farmer/farmer.model";

class FarmField {
    seedType : Seed;
    progress : number = 0;
}
let comp;

@Component({
  selector: 'farm-area',
  template: `
  {{selectedId}}
    <item-list [farmer]="farmer" [items]="items" (selectedItemIdChanges)="handleSelectionChange($event)"></item-list>
    <h4 (click)="debug()">Farming area</h4>
    <table>
      <tbody>
        <tr *ngFor="let row of area">
          <td *ngFor="let field of row"
          (click)="plantOrHarvest(field)"
          [class.no-seed]="calcCurrentState(field) === 'no'"
          [class.some-seed]="calcCurrentState(field) === 'some'"
          [class.fully-grown-seed]="calcCurrentState(field) === 'full'"
          [class.seed-state-bad]="calcCurrentState(field) === 'bad'">
            <div *ngIf="field.seedType">{{ field.seedType.name }} ( {{ (field.progress/100) | percent: '.1'}} )</div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      border-collapse: collapse;
    }
    table, th, td {
     border: 1px solid black;
    }
    td {
      width: 100px;
      height: 100px;
      text-align: center;
    }

    .no-seed {
      background-color: brown;
    }
    .some-seed {
      background-color: lightgreen;
    }
    .fully-grown-seed {
      background-color: green;
    }
    .seed-state-bad {
      background-color: brown;
    }

    .seedList {
      width: 300px;
    }
    .seedListItem {
      padding-top: 2px;
    }
    .seedListItem > .buy {
      float: right;
    }
    .selected {
      background-color: lightgrey;
    }
    `
  ],
  providers: [SeedService, ItemService]
})
export class FarmAreaComponent implements OnInit {
  @Input()
  farmer : Farmer;
  items : Item[] = this.itemService.getItems();
  selectedSeed : Seed = <Seed>this.items[5];
  selectedId: Number;
  area : FarmField[][] = [
    [new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField()],
    [new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField()],
    [new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField()],
    [new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField()],
    [new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField(),new FarmField()]
  ];

  constructor(private seedService: SeedService, private itemService: ItemService) { }
  
  ngOnInit() : void {
    comp = this;
    setInterval(this.growAll, 1000);
  }

  plantOrHarvest(field : FarmField) : void {
    if (field.seedType) {
      this.harvest(field);
    } else {
      this.plant(field);
    }
  }

  handleSelectionChange(selectedId): void {
    let maybeSeed: Item = this.items.find(el => el.id === selectedId);
    if (maybeSeed.type === ItemTypes.SEED) {
      this.selectedSeed = <Seed>maybeSeed;
    }
  }

  calcCurrentState(field : FarmField) {
    if (!field.seedType) {
      return "no";
    } else if (field.progress < 100) {
      return "some";
    } else if (field.progress < 200) {
      return "full";
    } else {
      return "bad";
    }
  }

  private plant(field : FarmField) : void {
    if (this.selectedSeed.amount > 0 && field.seedType === undefined) {
      this.selectedSeed.amount--;
      field.progress = 0;
      field.seedType = this.selectedSeed;
    }
  }

  private harvest(field : FarmField) : void {
    if (field.progress >= 100) {
      this.seedService.harvest(field.seedType);
      field.seedType = undefined;
    }
  }

  private growAll(factor = 1) : void {
    comp.area.forEach(line =>
      line.forEach(field => comp.growField(field, factor))
    );
  }

  private growField(field : FarmField, factor : number) : void {
    if (field.seedType) {
      field.progress += field.seedType.progressSpeed * factor;
      if (field.progress>300) {
          field.seedType = undefined;
          field.progress = 0;
      }
    }
  }

  debug() : void {
    this.growAll(3);
  }
}
