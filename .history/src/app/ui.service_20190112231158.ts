import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  searching: BehaviorSubject<Boolean>

  constructor() { }

  isSearching(): Observable<boolean> {
    return this.searching.asObservable();
  }
}
