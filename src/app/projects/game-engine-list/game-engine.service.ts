import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GameEngineOrTool } from './game-engine.model';
import { GAME_ENGINES } from './game-engine.constant';

@Component({
  selector: 'app-game-engine-list',
  templateUrl: './game-engine-list.component.html',
  styleUrls: ['./game-engine-list.component.css'],
  providers: []
})
export class GameEngineService {
  
  constructor(private http: Http) {
   }

  public getEngines(): Promise<GameEngineOrTool[]> {
    return Promise.resolve(GAME_ENGINES);
  }
}
