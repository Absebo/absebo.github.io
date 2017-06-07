import { Pipe, PipeTransform } from '@angular/core';
import { GameEngineOrTool, SearchFilter, SearchSortOrder } from './game-engine.model';

@Pipe({name: 'gameEnginePipe'})
export class GameEnginePipe implements PipeTransform {
  transform(value: GameEngineOrTool[], searchFilter: SearchFilter[], searchSortOrder: SearchSortOrder[]): GameEngineOrTool[] {
    return value;
  }
}