import { Component, OnInit } from '@angular/core';

import { GameEngineService } from './game-engine.service';
import { GameEngineOrTool, SearchFilter, SearchFilterTypeOption } from './game-engine.model';
import { Type } from './type.model';
import { SEARCH_FILTER_TYPE_OPTION } from './filter-types.constant';

@Component({
  selector: 'app-game-engine-list',
  templateUrl: './game-engine-list.component.html',
  styleUrls: ['./game-engine-list.component.css'],
  providers: [GameEngineService]
})
export class GameEngineListComponent implements OnInit {
  gameEngines: GameEngineOrTool[];
  searchFilterList: SearchFilter[] = [];
  Type = Type;

  constructor(private gameEngineService: GameEngineService) {
   }

  ngOnInit(): void {
    this.gameEngineService.getEngines().then(
      (responseEngines: GameEngineOrTool[]) => {
        this.gameEngines = responseEngines;
      }
    );
  }
}
