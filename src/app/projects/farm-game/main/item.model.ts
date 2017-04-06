import {ItemTypes} from "./item.constant";

export class Item {
  id : number;
  name : String;
  amount : number = 0;
  price: number;
  type: ItemTypes;

  constructor(options?: {id:number, name:String, price: number, amount:number}) {
    this.id = options.id;
    this.name = options.name;
    this.price = options.price;
    this.amount = options.amount;
    this.type = ItemTypes.ETC;
  }
}

export class Treasure extends Item {
  rarity : number;

  constructor(options?: {id:number, name:String, price: number, rarity: number, amount:number}) {
    super(options);
    this.rarity = options.rarity;
    this.type = ItemTypes.TREASURE;
  }
}

export class Seed extends Item {
  progressSpeed : number;
  plantResult: Item;

  constructor(options?: {id:number, name:String, price: number, progressSpeed: number, plantResult: Item, amount:number}) {
    super(options);
    this.progressSpeed = options.progressSpeed;
    this.plantResult = options.plantResult;
    this.type = ItemTypes.SEED;
  }
}