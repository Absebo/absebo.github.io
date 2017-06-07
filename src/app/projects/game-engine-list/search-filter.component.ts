import { Component } from '@angular/core';

import { GameEngineOrTool, SearchFilter, SearchFilterTypeOption } from './game-engine.model';
import { SEARCH_FILTER_TYPE_OPTION } from './filter-types.constant';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html'
})
export class SearchFilterComponent {
  searchFilterList: SearchFilter[] = [];
  searchFilterOptions: SearchFilterTypeOption[] = SEARCH_FILTER_TYPE_OPTION;

  addSearchFilter() {
    this.searchFilterList.push(new SearchFilter());
  }

  deleteSearchFilter(searchFilter: SearchFilter) {
    let index = this.searchFilterList.indexOf(searchFilter);
    if(index != -1) {
      this.searchFilterList.splice(index, 1);
    }
  }
}
