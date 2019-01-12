import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  searching: BehaviorSubject<Boolean>;

  constructor() { }

  isSearching(): Observable<Boolean> {
    return this.searching.asObservable();
  }

  setIsSearching(isSearching: Boolean): void {

  }
}
