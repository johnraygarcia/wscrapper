import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  searching: Observable<boolean>;

  constructor() { }
}
