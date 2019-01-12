import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './model/search-result.model';
import { BehaviorSubject } from 'rxjs';
import { UIService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private dataSource = new BehaviorSubject<Array<SearchResult>>(
    [{title: '', imgSrc: '', sellerName: '', rating: null, price: null }]);
    searchResult = this.dataSource.asObservable();
  constructor(
    private http: HttpClient,
    private uiService: UIService
  ) {

  }

  search(searchkey: string) {
    this.http.get<Array<SearchResult>>('http://localhost:3000/scrap-data?searchkey=' + searchkey)
      .subscribe((response) => {
        // Emit changes to the data source so search-result component can update its data list
        this.dataSource.next(response);
        this.uiService.isSearching(false);
      });
  }

  updatedSearchResult(searchResult: Array<SearchResult>) {
    this.dataSource.next(searchResult);
  }

  getDataSource() {
    return this.dataSource;
  }
}
