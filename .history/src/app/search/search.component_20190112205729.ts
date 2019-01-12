import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchkey: string;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  doSearch(): void {
    this.searchService.search(this.searchkey)
    // console.log(this.searchkey);
  }
}
