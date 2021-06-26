import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMainAPISegments } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IInfo } from 'src/app/models/info.interface';
import { tap } from 'rxjs/operators';

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

