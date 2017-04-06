import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FarmerInfoComponent }   from './farmer.component';
import { FarmerPage }   from './farmer.page';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    FarmerInfoComponent,
    FarmerPage
  ],
  exports: [
    FarmerInfoComponent,
    FarmerPage
  ]
})
export class FarmerModule { }
