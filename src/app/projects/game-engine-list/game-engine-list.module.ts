import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdAutocompleteModule, MdInputModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';

import {GameEngineListComponent} from './game-engine-list.component';
import { GameEnginePipe } from './game-engine.pipe';
import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdInputModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
      GameEngineListComponent,
      GameEnginePipe,
      SearchFilterComponent
  ],
  exports: [
      GameEngineListComponent
  ]
})
export class GameEngineListModule { }
