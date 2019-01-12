import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SearchResult } from '../model/search-result.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  searchResult: Array<SearchResult>;

  constructor(private searchService: SearchService) {
    searchService.getDataSource().subscribe((searchResult) => {
      this.searchResult = searchResult;
    });
  }
}
