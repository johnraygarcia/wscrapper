import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  _isSearching: BehaviorSubject<Boolean>;

  constructor() { }

  isSearching(): Observable<Boolean> {
    return this._isSearching.asObservable();
  }

  setIsSearching(isSearching: Boolean): void {
    this._isSearching.next(isSearching);
  }
}