import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(searchkey: string) {
    this.http.get('http://localhost:3000/search?searchkey=' + searchkey)
      .subscribe();
  }
}
