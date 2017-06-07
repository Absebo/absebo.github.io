import { Injectable } from '@angular/core';

@Injectable()
export class JsonFlattenService {

  flatten(obj: any) {
    let res = {};
    function flaty(obj, prefix?: string) {
      for (let key in obj) {
        let val = obj[key];
        let type = typeof val;
        if (type === "object") {
          flaty(val, prefix ? `${prefix}.${key}` : key);
        } else {
          res[prefix ? `${prefix}.${key}` : key] = val;
        }
      }
    }
    flaty(obj);
    return res;
  }

  /* 
    "unflatten" is a function that has to be a property 
    cause it uses the this keyword.
    The arrow function syntax changes the behavior of the 
    this keyword so "this" is always linked to this service and never to undefined
  */
  unflatten = (obj: any) => {
    let res: any = {};
    for (let key in obj) {
      let value = obj[key];
      let type = typeof value;
      if (type === "object") {
        value = this.unflatten(value);
      }
      let keys: string[] = key.split(".");
      let node = res;
      keys.forEach( (subkey, index) => {
        let possibleNode = node[subkey];
        if (index === keys.length-1) {
          node[subkey] = value;
        } else if (possibleNode) {
          node = possibleNode;
        } else {
          let newNode = {};
          node[subkey] = newNode;
          node = newNode;
        }
      });
    }
    return res;
  };
}
