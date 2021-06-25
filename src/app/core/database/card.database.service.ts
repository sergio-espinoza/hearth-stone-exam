import { Injectable } from '@angular/core';
import { CapacitorSQLite, capSQLiteValues } from '@capacitor-community/sqlite';
import { from, Observable, of } from 'rxjs';
import { DatabaseService } from './database.service';
import { QueryDatabaseService } from './query.database.service';

@Injectable({ providedIn: 'root' })
export class CardDatabaseService {
  constructor(
    private dataBaseSvc: DatabaseService,
    private queryDatabaseSvc: QueryDatabaseService
  ) { }

  public getCards(): Observable<capSQLiteValues> {
    const statement = 'SELECT * FROM cards;';
    return from(CapacitorSQLite.query({ statement, values: [] }));
  }

  public getCardPagination(
    limitValue: number, lastValue = 0
  ): Observable<capSQLiteValues> {
    const statement = this.queryDatabaseSvc.getPaginationQuery({
      lastValue, limitValue, tableName: 'cards', columnName: 'id'
    });

    return from(CapacitorSQLite.query({ statement, values: [] }));
  }

}

