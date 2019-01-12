import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchkey: string;
  downloadText: string;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  doSearch(): void {
    this.searchService.search(this.searchkey);
    // emit the search result to searchService to update the list of search items in dashboard
    // console.log(this.searchkey);
  }
}
