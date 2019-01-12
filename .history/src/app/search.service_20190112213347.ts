import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './search/search-result.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResult: Array<SearchResult>;
  private dataSource = new BehaviorSubject<SearchResult>(null);
  data = this.dataSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  search(searchkey: string) {
    this.http.get<Array<SearchResult>>('http://localhost:3000/scrap-data?searchkey=' + searchkey)
      .subscribe((response) => {
        this.searchResult = response;
      });
  }

  getSearchResult(): Array<SearchResult> {
    return [];
  }

  updatedSearchResult(searchResult: Array<SearchResult>){
    this.dataSource.next(searchResult);
  }
}
