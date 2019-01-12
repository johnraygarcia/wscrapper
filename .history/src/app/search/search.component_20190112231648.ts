import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchkey: string;
  downloadText: string;
  isSearching: Boolean;
  constructor(
    private searchService: SearchService,
    private uiService: UIService
  ) {
    this.downloadText = 'Download Result';
  }

  ngOnInit() {
  }

  doSearch(): void {
    this.searchService.search(this.searchkey);
    // emit the search result to searchService to update the list of search items in dashboard
    // console.log(this.searchkey);
  }
}
