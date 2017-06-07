import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { VoidGameComponent } from './projects/void-game/void-game.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { FarmGameModule } from'./projects/farm-game/farm-game.module';
import { JsonFlattenModule } from'./projects/json-flatten/json-flatten.module';
import { GameEngineListModule } from './projects/game-engine-list/game-engine-list.module';

import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    VoidGameComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FarmGameModule,
    GameEngineListModule,
    JsonFlattenModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
