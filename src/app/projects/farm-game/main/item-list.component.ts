import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";

import {SeedService} from "../seed/seed.service";
import {Item} from "./item.model";
import {Farmer} from "../farmer/farmer.model";

@Component({
  selector: 'item-list',
  template: `
    <h4>Items</h4>
    <md-list dense>
      <md-list-item *ngFor="let item of items">
          <button md-raised-button (click)="buy(item)"
            [disabled]="item.price > farmer.money">
            <md-icon>shopping_cart</md-icon>Buy
          </button>
          <button md-raised-button (click)="sell(item)"
            [disabled]="item.amount === 0">
            <md-icon>remove_shopping_cart</md-icon>Sell
          </button>
          <button (click)="select(item)" md-raised-button
            [class.selected]="item.id === selectedItemId"
            [disabled]="item.amount === 0">
              <span>{{item.name}}: {{item.price}}$ ({{item.amount}}x)</span>
              <span *ngIf="item.progressSpeed > 0"> G:{{ item.progressSpeed }}%</span>
          </button>
      </md-list-item>
     </md-list>
  `,
  styles: [`
    .selected {
      background-color: bisque;
    }
    .selected.zero-item-amount {
      background-color: crimson;
    }
    `
  ],
  providers: [SeedService]
})
export class ItemList {
  @Input()
  farmer : Farmer;
  @Input()
  items: Item[];
  @Output()
  selectedItemIdChanges: EventEmitter<Number> = new EventEmitter();
  selectedItemId: Number;

  constructor(private seedService: SeedService) {
  }

  select(item: Item): void{
    this.selectedItemId = item.id;
    this.selectedItemIdChanges.emit(item.id);
  }

  buy(item: Item) : void {
    if (item.price <= this.farmer.money) {
      this.farmer.money -= item.price;
      item.amount += 1;
    }
  }

  sell(item: Item) : void {
    if (item.amount > 0) {
      item.amount--;
      this.farmer.money += item.price;
    }
  }
}
