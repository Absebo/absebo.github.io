import { GameEngineListComponent } from './projects/game-engine-list/game-engine-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FarmGameComponent } from'./projects/farm-game/farm-game.component';
import { JsonFlattenComponent } from'./projects/json-flatten/json-flatten.component';
import { VoidGameComponent } from './projects/void-game/void-game.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
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
  {
    path: 'json-flatten',
    component: JsonFlattenComponent
  }
];