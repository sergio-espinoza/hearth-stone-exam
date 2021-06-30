import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TMainAPISegments, IInfo } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class InfoHttpService {
  private segment: TMainAPISegments = 'info';

  constructor(
    private http: HttpClient
  ) { }

  public getInfo$(): Observable<IInfo> {
    return this.http.get<IInfo>(
      `${environment.mainApiUrl}/${this.segment}`
    ).pipe(tap(() => console.log('cards external http')));
  }

}

