import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DatabaseStateService {
  private isReady$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getIsReadyState$(): Observable<boolean> {
    return this.isReady$.asObservable();
  }

  public setIsReady$(state: boolean): void {
    this.isReady$.next(state);
  }

}
