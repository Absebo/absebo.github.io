import { Injectable } from '@angular/core';

import {Item, Seed, Treasure} from "../main/item.model";
import {ItemTypes} from "../main/item.constant";
import {ItemService} from "../main/item.service";

@Injectable()
export class SeedService {
  constructor(private itemService: ItemService) {

  }

  harvest(seed : Seed) : void {
    let treasureList: Treasure[] = <Treasure[]>this.itemService.getItemsByType(ItemTypes.TREASURE);
    treasureList
      .filter(treasure => treasure.rarity >= Math.random() )
      .forEach(treasure => treasure.amount++);
    this.itemService.getItems().find(item => item === seed.plantResult).amount++;
  }
 };
