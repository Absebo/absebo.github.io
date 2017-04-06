import { Injectable } from '@angular/core';

import {Item, Seed, Treasure} from "../main/item.model";
import {ItemTypes} from "../main/item.constant";

@Injectable()
export class ItemService {
  private cachedItems : Item[];

  getItemByName(name: String): Item {
    return this.getItems().find(item => item.name === name);
  }

  getItems() : Item[] {
    if (!this.cachedItems) {
      this.cachedItems = this.loadItems()
    }
    return this.cachedItems;
  }

  getItemsByType(itemType: ItemTypes): Item[] {
    return this.getItems().filter(item => item.type === itemType);
  }

//TODO remove id's
  private loadItems() : Item[] {
      let trasure_V1: Item = new Treasure({id:0, name:"treasureLV1", price:100, rarity: 0.1, amount:0});
      let trasure_V2: Item = new Treasure({id:-1, name:"treasureLV2", price:1000, rarity: 0.01, amount:0});
      let trasure_V3: Item = new Treasure({id:-2, name:"treasureLV3", price:10000, rarity: 0.001, amount:0});

      let item_grass: Item = new Item({id:1, name:"grass", price:15, amount:0});
      let item_wheat: Item = new Item({id:2, name:"wheat", price:82, amount:0});
      let item_berrie: Item = new Item({id:3, name:"berrie", price:130, amount:0});
      let item_gold: Item = new Item({id:4, name:"gold", price:1400, amount:0});

      let seed_grass: Item = new Seed({id:5, name:"grass seed", price: 10, progressSpeed: 10, plantResult: item_grass, amount:0});
      let seed_wheat: Item = new Seed({id:6, name:"wheat seed", price: 50, progressSpeed: 2, plantResult: item_wheat, amount:0});
      let seed_berrie: Item = new Seed({id:7, name:"berrie seed", price: 100, progressSpeed: 1,plantResult: item_berrie,  amount:0});
      let seed_gold: Item = new Seed({id:8, name:"gold seed", price: 1000, progressSpeed: 0.1, plantResult: item_gold, amount:0});

      let seed_fast_grass: Item = new Seed({id:9, name:"grass seed [F]", price: 12, progressSpeed: 20, plantResult: item_grass, amount:0});
      let seed_fast_wheat: Item = new Seed({id:10, name:"wheat seed [F]", price: 52, progressSpeed: 10, plantResult: item_wheat, amount:0});
      let seed_fast_berrie: Item = new Seed({id:11, name:"berrie seed [F]", price: 104, progressSpeed: 2, plantResult: item_berrie, amount:0});
      let seed_fast_gold: Item = new Seed({id:12, name:"gold seed [F]", price: 1100, progressSpeed: 0.3, plantResult: item_gold, amount:0});
    return [
      trasure_V1,
      trasure_V2,
      trasure_V3,

      item_grass,
      item_wheat,
      item_berrie,
      item_gold,

      seed_grass,
      seed_wheat,
      seed_berrie,
      seed_gold,

      seed_fast_grass,
      seed_fast_wheat,
      seed_fast_berrie,
      seed_fast_gold
    ];
  }
 };
