import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ItemList }   from './item-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ItemList
  ],
  exports: [
    ItemList
  ]
})
export class ItemModule { }
