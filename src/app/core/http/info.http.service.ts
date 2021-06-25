import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TMainAPISegments } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IInfo } from 'src/app/models/info.interface';
import { tap } from 'rxjs/operators';
import { InfoService } from '../services';

@Injectable({ providedIn: 'root' })
export class InfoHttpService {
  private segment: TMainAPISegments = 'info';
  private headers = new HttpHeaders(
    environment.mainApiHeaders as any
  );

  constructor(private http: HttpClient, private infoSvc: InfoService) { }

  public getInfo$(): Observable<IInfo> {
    return this.http.get<IInfo>(
      `${environment.mainApiUrl}/${this.segment}`,
      { headers: this.headers }
    );
  }

}

