import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MdInputModule, MdButtonModule } from '@angular/material';

import { JsonFlattenComponent } from './json-flatten.component';
import { JsonFlattenService } from './json-flatten.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    JsonFlattenComponent
  ],
  exports: [
    JsonFlattenComponent
  ],
  providers: [JsonFlattenService]
})
export class JsonFlattenModule { }
