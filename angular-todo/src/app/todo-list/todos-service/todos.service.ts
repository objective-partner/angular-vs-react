import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  entries: string[] = [];
  entries$: BehaviorSubject<string[]>;
  constructor() {
    this.entries$ = new BehaviorSubject(this.entries);
   }

  public getEntries():Observable<string[]>{
    return this.entries$.asObservable();
  }
}
