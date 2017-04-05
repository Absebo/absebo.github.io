import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app-wrapper/app.component';
import { GameEngineListComponent } from './game-engine-list/game-engine-list.component';
import { VoidGameComponent } from './void-game/void-game.component';
import { ProjectListComponent } from './project-list/project-list.component';


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
        path: 'void-game',
        component: VoidGameComponent
      },
      {
        path: 'project-list',
        component: ProjectListComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
