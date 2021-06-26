import { Injectable } from '@angular/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TDatabaseName } from 'src/app/models';
import { IInfo } from 'src/app/models/info.interface';
import { InfoService } from '../services/info.service';
import { QueryDatabaseService } from './query.database.service';

@Injectable({ providedIn: 'root' })
export class InfoDatabaseService {
  private dbName: TDatabaseName = 'hearthstone-db';

  constructor(
    private queryDatabaseSvc: QueryDatabaseService,
    private infoSvc: InfoService
  ) { }

  public insertIntoInfo(info: IInfo): Observable<any> {
    const { keys, values } = this.infoSvc.formatInfoHttpToDatabase(info);

    const statement = this.queryDatabaseSvc.getInsertIntoQuery(
      'info', keys, values
    );

    return from(CapacitorSQLite.execute({
      database: this.dbName, statements: statement
    })).pipe(
      tap(() => this.infoSvc.setInfoData(info)),
      catchError(error => of({}))
    );
  }

  public selectAllInfo(): Observable<IInfo> {
    const statement = 'SELECT * FROM info;';

    return from(CapacitorSQLite.query({ database: this.dbName, statement, values: [] })).pipe(
      map(infoData => this.infoSvc.formInfoDatabaseToShow(infoData)),
      catchError((error) => of({} as IInfo))
    );
  }

}
