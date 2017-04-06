import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

import {Item} from "../main/item.model";
import {ItemTypes} from "../main/item.constant";

@Pipe({name: 'seedFilter'})
export class SeedFilter implements PipeTransform {
  transform(value: Item[]): any {
    return _.filter(value, function(val) {
      return val.type == ItemTypes.SEED;
    });
  }
}
