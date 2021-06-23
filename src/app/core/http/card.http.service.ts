import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard, TMainAPISegments } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CardHttpService {
  private headers = new HttpHeaders(
    environment.mainApiHeaders as any
  );

  constructor(
    private http: HttpClient
  ) { }

  public getCardsForSegment(segment: TMainAPISegments, segmentValue: string): Observable<ICard[]> {
    return this.http.get<ICard[]>(
      `${environment.mainApiUrl}/cards/${segment}/${segmentValue}`,
      { headers: this.headers }
    );
  }
}
