import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FarmerModule }   from '../farmer/farmer.module';
import { ItemModule }   from '../main/item.module';

import { FarmAreaComponent }   from './farm-area.component';
import { FarmPage }   from './farm.page';
import { SeedFilter }   from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FarmerModule,
    ItemModule
  ],
  declarations: [
    FarmAreaComponent,
    FarmPage,
    SeedFilter
  ],
  exports: [
    FarmPage
  ]
})
export class FarmModule { }
