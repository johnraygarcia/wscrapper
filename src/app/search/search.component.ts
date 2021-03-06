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
  isSearching: Boolean = false;
  constructor(
    private searchService: SearchService,
    private uiService: UIService
  ) {
    this.downloadText = 'Download Result';
    this.uiService.isSearching().subscribe((isSearching) => {
      this.isSearching = isSearching;
    });
  }

  ngOnInit() {
  }

  doSearch(): void {
    this.searchService.search(this.searchkey);
    this.uiService.setIsSearching(true);
    this.isSearching = true;
  }
}
