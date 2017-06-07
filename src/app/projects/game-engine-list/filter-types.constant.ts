import { GameEngineOrTool, SearchFilter, SearchFilterTypeOption } from './game-engine.model';

export const SEARCH_FILTER_TYPE_OPTION: SearchFilterTypeOption[] = [
    new SearchFilterTypeOption("Name", (gameEngine: GameEngineOrTool, searchFilter: SearchFilter) => gameEngine.name.includes(searchFilter.propertyValue)),
    new SearchFilterTypeOption("2d", (gameEngine: GameEngineOrTool, searchFilter: SearchFilter) => gameEngine.support2d === searchFilter.propertyValue),
    new SearchFilterTypeOption("3d", (gameEngine: GameEngineOrTool, searchFilter: SearchFilter) => gameEngine.support3d === searchFilter.propertyValue),
];