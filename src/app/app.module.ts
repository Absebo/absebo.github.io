import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app-wrapper/app.component';
import { GameEngineListComponent } from './projects/game-engine-list/game-engine-list.component';
import { VoidGameComponent } from './projects/void-game/void-game.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FarmGameModule } from'./projects/farm-game/farm-game.module';
import { FarmGameComponent } from'./projects/farm-game/farm-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameEngineListComponent,
    VoidGameComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FarmGameModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/project-list',
        pathMatch: 'full'
      },
      {
        path: 'game-engine-list',
        component: GameEngineListComponent
      },
      {
        path: 'project-list',
        component: ProjectListComponent
      },
      {
        path: 'void-game',
        component: VoidGameComponent
      },
      {
        path: 'farm-game',
        component: FarmGameComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
