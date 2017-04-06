import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FarmGameComponent }   from './farm-game.component';

import { FarmModule }   from './farm/farm.module';
import { FarmerModule }   from './farmer/farmer.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FarmerModule,
    FarmModule
  ],
  declarations: [
    FarmGameComponent
  ]
})
export class FarmGameModule { }
