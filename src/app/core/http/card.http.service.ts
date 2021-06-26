import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard, TMainAPISegments } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CardHttpService {
  constructor(
    private http: HttpClient
  ) { }

  public getCardsForSegment(
    segment: TMainAPISegments, segmentValue: string
  ): Observable<ICard[]> {
    return this.http.get<ICard[]>(
      `${environment.mainApiUrl}/cards/${segment}/${segmentValue}`
    );
  }
  public getAllCards(
  ): Observable<{ [key: string]: ICard[]}> {
    return this.http.get<{ [key: string]: ICard[]}>(
      `${environment.mainApiUrl}/cards`
    );
  }
}


/* Object.values(Object.values(window.allCards).filter(
  d => d.length > 0).reduce((a, c) => ([...a, ...c]))).map
  v => Object.values({...da, ...v, ...{mechanics: JSON.stringify(v.mechanics || '').replace(/\"/g, '\`')}}));

*/
