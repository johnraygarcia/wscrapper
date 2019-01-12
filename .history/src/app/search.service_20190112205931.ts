import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './search/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResult: Array<SearchResult>;
  constructor(
    private http: HttpClient
  ) { }

  search(searchkey: string) {
    this.http.get<Array<SearchResult>>('http://localhost:3000/scrap-data?searchkey=' + searchkey)
      .subscribe((response) => {
        this.searchResult = response;
      });
  }
}
