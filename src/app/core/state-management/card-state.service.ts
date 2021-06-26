import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardStateService {
  private routerState: [string, string | number] = ['', ''];

  constructor() { }

  public getRouterState(): [string, string | number] {
    return this.routerState;
  }

  public setRouterState(state: [string, string | number]): void {
    this.routerState = state;
  }

}
